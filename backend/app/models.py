from sqlmodel import SQLModel, Field
from typing import Optional
from uuid import uuid4, UUID
from datetime import datetime

class User(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True)
    email: str = Field(index=True, unique=True)
    hashed_password: str
    is_active: bool = True
    is_verified: bool = False
    nickname: Optional[str] = None
    avatar_url: Optional[str] = None
    verification_code: Optional[str] = None
    code_generated_at: Optional[datetime] = None
    reset_code: Optional[str] = None
    reset_code_generated_at: Optional[datetime] = None