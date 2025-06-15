from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from .config import settings

async def send_verification_email(email: str, user_id: str) -> bool:
    try:
        message = MIMEMultipart()
        message["From"] = settings.email_user
        message["To"] = email
        message["Subject"] = "Verify your email"

        body = f"Click to verify: {settings.frontend_confirm_url}/{user_id}"
        message.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(settings.email_host, settings.email_port) as server:
            server.starttls()
            server.login(settings.email_user, settings.email_password)
            server.sendmail(settings.email_user, email, message.as_string())
        return True
    except Exception as e:
        print(f"Email error: {e}")
        return False
