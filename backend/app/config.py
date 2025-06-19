import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:z3696680Se@localhost/redly")

class Settings(BaseSettings):
    database_url: str = DATABASE_URL
    secret_key: str = "your-secret-key-change-me"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    resend_api_key: str = "re_dhmYScGb_GyyGk6wia72XumyiMPtpAxSW"
    resend_from_email: str = "no-reply@maxless.ru"
    resend_from_name: str = "Redly"

    frontend_url: str = "http://localhost:3000"

    class Config:
        env_file = ".env"

settings = Settings()