from jose import jwt
from datetime import datetime, timedelta
from typing import Optional
from .config import settings

def create_verification_token(user_email: str, user_id: str) -> str:
    """Создает JWT токен для верификации email"""
    payload = {
        "email": user_email,
        "user_id": user_id,
        "type": "email_verification",
        "exp": datetime.utcnow() + timedelta(hours=24)  # Токен действует 24 часа
    }
    token = jwt.encode(payload, settings.secret_key, algorithm=settings.algorithm)
    return token

def verify_email_token(token: str) -> Optional[dict]:
    """Проверяет и декодирует JWT токен для верификации email"""
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])
        if payload.get("type") != "email_verification":
            return None
        return payload
    except jwt.ExpiredSignatureError:
        return None  # Токен истёк
    except jwt.InvalidTokenError:
        return None  # Токен недействителен

def create_verification_link(user_email: str, user_id: str) -> str:
    """Создает ссылку для верификации email"""
    token = create_verification_token(user_email, user_id)
    verification_link = f"myapp://confirm?token={token}"
    return verification_link
