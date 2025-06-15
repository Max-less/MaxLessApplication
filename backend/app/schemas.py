from pydantic import BaseModel, EmailStr
from typing import Optional
from uuid import UUID

class UserRegister(BaseModel):
    email: EmailStr
    password: str
    password_confirm: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: UUID
    email: str
    nickname: Optional[str]
    is_verified: bool

class ProfileFinalize(BaseModel):
    user_id: UUID
    nickname: str
    avatar_url: Optional[str] = None