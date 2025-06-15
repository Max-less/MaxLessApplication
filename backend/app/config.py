import os
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:z3696680Se@localhost/redly")

class Settings(BaseSettings):
    frontend_confirm_url: str = "http://localhost:3000/confirm"
    database_url: str = "postgresql://postgres:z3696680Se@localhost/redly"
    secret_key: str = "your-secret-key-change-me"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30
    email_host: str = "smtp.example.com"
    email_port: int = 587
    email_user: str = "your@email.com"
    email_password: str = "yourpassword"
    
    class Config:
        env_file = ".env"

settings = Settings()