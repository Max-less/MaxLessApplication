import os
from fastapi import APIRouter, Depends, HTTPException, status, Body
from pydantic import EmailStr
from passlib.hash import bcrypt
from sqlmodel import Session, select
from .models import User
from .database import get_session
from .email_utils import send_verification_email, send_welcome_email, send_verification_code_email, send_reset_code_email
from .jwt_utils import verify_email_token
from uuid import UUID
from typing import Optional
from datetime import datetime, timedelta, timezone
from jose import JWTError, jwt
from .schemas import UserLogin, UserRegister
import random
from pydantic import BaseModel

router = APIRouter()

SECRET_KEY = os.getenv("SECRET_KEY", "change-this-to-a-secure-key")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

async def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

@router.post("/register")
def register(user: UserRegister, session: Session = Depends(get_session)):
    """Регистрация нового пользователя"""
    email = user.email
    password = user.password
    password_confirm = user.password_confirm
    
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
    # Генерируем 6-значный код
    code = f'{random.randint(0, 999999):06d}'
    new_user.verification_code = code
    new_user.code_generated_at = datetime.now(timezone.utc)
    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    email_sent = send_verification_code_email(new_user.email, code)
    
    if not email_sent:
        raise HTTPException(
            status_code=500, 
            detail="Failed to send verification code. Please try again."
        )
    
    return {
        "message": "User registered successfully. Please check your email for the verification code.",
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

class FinalizeProfileRequest(BaseModel):
    email: EmailStr
    nickname: str
    avatar_url: Optional[str] = None

@router.post("/finalize-profile")
def finalize_profile(data: FinalizeProfileRequest, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == data.email)).first()
    if not user or not user.is_verified:
        raise HTTPException(status_code=404, detail="Email not verified or user not found")
    user.nickname = data.nickname
    user.avatar_url = data.avatar_url
    user.is_active = True
    session.add(user)
    session.commit()
    return {"message": "Profile finalized successfully!"}

@router.post("/login", response_model=dict)
async def login(data: UserLogin, session: Session = Depends(get_session)):
    """
    Авторизация пользователя по email и паролю.
    Ожидает тело запроса: { "email": "...", "password": "..." }
    """
    user = session.exec(select(User).where(User.email == data.email)).first()
    if not user or not bcrypt.verify(data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Неверные учетные данные")
    if not user.is_verified:
        raise HTTPException(status_code=403, detail="Email не подтвержден")
    
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await create_access_token(
        data={"sub": str(user.id)}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

from pydantic import BaseModel, EmailStr

class EmailSchema(BaseModel):
    email: EmailStr

@router.post("/request-password-reset")
def request_password_reset(data: EmailSchema, session: Session = Depends(get_session)):
    email = data.email
    user = session.exec(select(User).where(User.email == email)).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    code = f'{random.randint(0, 999999):06d}'
    user.reset_code = code
    user.reset_code_generated_at = datetime.now(timezone.utc)
    session.add(user)
    session.commit()
    send_reset_code_email(user.email, code)
    return {"message": "Reset code sent to email"}

class CodeVerifyRequest(BaseModel):
    email: EmailStr
    code: str

@router.post("/verify-code")
def verify_code(data: CodeVerifyRequest, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == data.email)).first()
    if not user or not user.verification_code:
        raise HTTPException(status_code=404, detail="User not found or code not set")
    if user.code_generated_at:
        code_time = user.code_generated_at
        if code_time.tzinfo is None:
            code_time = code_time.replace(tzinfo=timezone.utc)
        if datetime.now(timezone.utc) - code_time > timedelta(minutes=10):
            raise HTTPException(status_code=400, detail="Code expired")
    if user.verification_code != data.code:
        raise HTTPException(status_code=400, detail="Invalid code")
    user.is_verified = True
    user.is_active = True
    user.verification_code = None
    user.code_generated_at = None
    session.add(user)
    session.commit()
    return {"message": "Email verified"}

class NicknameCheckRequest(BaseModel):
    nickname: str

@router.post("/check-nickname")
def check_nickname(data: NicknameCheckRequest, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.nickname == data.nickname)).first()
    return {"available": user is None}

class ResetCodeVerifyRequest(BaseModel):
    email: EmailStr
    code: str

class ResetPasswordRequest(BaseModel):
    email: EmailStr
    code: str
    new_password: str

@router.post("/verify-reset-code")
def verify_reset_code(data: ResetCodeVerifyRequest, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == data.email)).first()
    if not user or not user.reset_code:
        raise HTTPException(status_code=404, detail="User not found or code not set")
    if user.reset_code != data.code:
        raise HTTPException(status_code=400, detail="Invalid code")
    if user.reset_code_generated_at and (datetime.now(timezone.utc) > user.reset_code_generated_at + timedelta(minutes=10)):
        raise HTTPException(status_code=400, detail="Code expired")
    return {"message": "Code valid"}

@router.post("/reset-password")
def reset_password(data: ResetPasswordRequest, session: Session = Depends(get_session)):
    user = session.exec(select(User).where(User.email == data.email)).first()
    if not user or not user.reset_code:
        raise HTTPException(status_code=404, detail="User not found or code not set")
    if user.reset_code != data.code:
        raise HTTPException(status_code=400, detail="Invalid code")
    if user.reset_code_generated_at and (datetime.now(timezone.utc) > user.reset_code_generated_at + timedelta(minutes=10)):
        raise HTTPException(status_code=400, detail="Code expired")
    user.hashed_password = bcrypt.hash(data.new_password)
    user.reset_code = None
    user.reset_code_generated_at = None
    session.add(user)
    session.commit()
    return {"message": "Password reset successful"}