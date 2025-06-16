import os
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import EmailStr
from passlib.hash import bcrypt
from sqlmodel import Session, select
from .models import User
from .database import get_session
from .email_utils import send_verification_email, send_welcome_email
from .jwt_utils import verify_email_token
from uuid import UUID
from typing import Optional
from datetime import datetime, timedelta
from jose import JWTError, jwt

router = APIRouter()

SECRET_KEY = os.getenv("SECRET_KEY", "change-this-to-a-secure-key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

async def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/register")
def register(email: EmailStr, password: str, password_confirm: str, session: Session = Depends(get_session)):
    """Регистрация нового пользователя"""
    if password != password_confirm:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    existing_user = session.exec(select(User).where(User.email == email)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    hashed_password = bcrypt.hash(password)
    new_user = User(
        email=email, 
        hashed_password=hashed_password,
        is_active=False,
        is_verified=False
    )
    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    email_sent = send_verification_email(new_user.email, str(new_user.id))
    
    if not email_sent:
        raise HTTPException(
            status_code=500, 
            detail="Failed to send verification email. Please try again."
        )
    
    return {
        "message": "User registered successfully. Please check your email to verify your account.",
        "email": email
    }

@router.get("/verify-email")
def verify_email(token: str, session: Session = Depends(get_session)):
    """Верификация email по токену"""
    payload = verify_email_token(token)
    if not payload:
        raise HTTPException(
            status_code=400, 
            detail="Invalid or expired verification token"
        )
    
    user_id = payload.get("user_id")
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.email != payload.get("email"):
        raise HTTPException(status_code=400, detail="Token email mismatch")
    
    if user.is_verified:
        return {"message": "Email already verified"}
    
    user.is_verified = True
    user.is_active = True
    session.add(user)
    session.commit()
    
    send_welcome_email(user.email, user.nickname or user.email.split('@')[0])
    
    return {"message": "Email successfully verified! You can now log in."}

@router.post("/resend-verification")
def resend_verification_email(email: EmailStr, session: Session = Depends(get_session)):
    """Повторная отправка письма для верификации"""
    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    if user.is_verified:
        raise HTTPException(status_code=400, detail="Email already verified")
    
    email_sent = send_verification_email(user.email, str(user.id))
    if not email_sent:
        raise HTTPException(
            status_code=500, 
            detail="Failed to resend verification email"
        )
    
    return {"message": "Verification email resent successfully"}

@router.get("/confirm/{user_id}")
async def confirm_email(user_id: UUID, session: Session = Depends(get_session)):
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    user.is_verified = True
    session.add(user)
    session.commit()
    return {"message": "Email confirmed successfully!"}

@router.post("/finalize-profile")
async def finalize_profile(user_id: UUID, nickname: str, avatar_url: Optional[str] = None, session: Session = Depends(get_session)):
    user = session.get(User, user_id)
    if not user or not user.is_verified:
        raise HTTPException(status_code=404, detail="Email not verified or user not found")
    
    user.nickname = nickname
    user.avatar_url = avatar_url
    user.is_active = True
    session.add(user)
    session.commit()
    return {"message": "Profile finalized successfully!"}

@router.post("/login", response_model=dict)
async def login(email: EmailStr, password: str, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == email)).first()
    if not user or not bcrypt.verify(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    if not user.is_verified:
        raise HTTPException(status_code=403, detail="Email not verified")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await create_access_token(
        data={"sub": str(user.id)}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}