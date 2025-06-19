import resend
from typing import Optional
from .config import settings
import logging

logger = logging.getLogger(__name__)

# Инициализация Resend
resend.api_key = settings.resend_api_key

def create_verification_email_content(user_name: str, verification_link: str) -> str:
    """Создает HTML-контент для email верификации"""
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Подтверждение email</title>
        <style>
            .container {{
                max-width: 600px;
                margin: 0 auto;
                font-family: Arial, sans-serif;
                padding: 20px;
            }}
            .button {{
                background-color: #007bff;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 4px;
                display: inline-block;
                margin: 20px 0;
            }}
            .footer {{
                margin-top: 30px;
                font-size: 12px;
                color: #666;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Добро пожаловать, {user_name}!</h2>
            <p>Спасибо за регистрацию в {settings.resend_from_name}.</p>
            <p>Для завершения регистрации подтвердите ваш email-адрес, нажав на кнопку ниже:</p>
            
            <a href="{verification_link}" class="button">
                Подтвердить email
            </a>
            
            <p>Если кнопка не работает, скопируйте и вставьте эту ссылку в браузер:</p>
            <p>{verification_link}</p>
            
            <div class="footer">
                <p>Ссылка действительна в течение 24 часов.</p>
                <p>Если вы не регистрировались в нашем приложении, просто игнорируйте это письмо.</p>
            </div>
        </div>
    </body>
    </html>
    """
    return html_content

def send_verification_email(email: str, user_id: str, user_name: Optional[str] = None) -> bool:
    """Отправляет email для верификации через Resend API"""
    try:
        # Импортируем здесь, чтобы избежать циклических импортов
        from .jwt_utils import create_verification_link
        
        # Создаем ссылку для верификации
        verification_link = create_verification_link(email, user_id)
        
        # Используем email как имя, если имя пользователя не указано
        display_name = user_name or email.split('@')[0]
        
        # Создаем HTML-контент
        html_content = create_verification_email_content(display_name, verification_link)
        
        # Параметры для отправки через Resend
        params: resend.Emails.SendParams = {
            "from": f"{settings.resend_from_name} <{settings.resend_from_email}>",
            "to": [email],
            "subject": f"Подтвердите ваш email в {settings.resend_from_name}",
            "html": html_content,
        }
        
        # Отправляем через Resend
        email_response: resend.Email = resend.Emails.send(params)
        
        # Логируем успешную отправку
        logger.info(f"Email отправлен на {email} через Resend, ID: {email_response.get('id', 'N/A')}")
        return True
        
    except Exception as e:
        logger.error(f"Ошибка отправки email на {email}: {e}")
        return False

def send_welcome_email(email: str, user_name: str) -> bool:
    """Отправляет приветственное письмо после верификации"""
    try:
        html_content = f"""
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
            <h2>Email успешно подтвержден!</h2>
            <p>Добро пожаловать, {user_name}!</p>
            <p>Ваш email-адрес был успешно подтвержден. Теперь вы можете пользоваться всеми функциями нашего приложения.</p>
            <p>Спасибо за регистрацию!</p>
        </div>
        """
        
        params: resend.Emails.SendParams = {
            "from": f"{settings.resend_from_name} <{settings.resend_from_email}>",
            "to": [email],
            "subject": "Email подтвержден!",
            "html": html_content,
        }
        
        email_response: resend.Email = resend.Emails.send(params)
        
        logger.info(f"Приветственное письмо отправлено на {email}")
        return True
        
    except Exception as e:
        logger.error(f"Ошибка отправки приветственного письма на {email}: {e}")
        return False

def send_verification_code_email(email: str, code: str) -> bool:
    try:
        from .config import settings
        import resend
        resend.api_key = settings.resend_api_key
        html_content = f"""
        <div style='font-family: Arial, sans-serif;'>
            <h2>Ваш код подтверждения</h2>
            <p>Введите этот код в приложении:</p>
            <div style='font-size: 32px; letter-spacing: 8px; font-weight: bold; color: #FF9800;'>{code}</div>
            <p style='color: #888; font-size: 12px;'>Код действует 10 минут.</p>
        </div>
        """
        params = {
            "from": f"{settings.resend_from_name} <{settings.resend_from_email}>",
            "to": [email],
            "subject": f"Код подтверждения для {settings.resend_from_name}",
            "html": html_content,
        }
        resend.Emails.send(params)
        return True
    except Exception as e:
        import logging
        logging.error(f"Ошибка отправки кода на {email}: {e}")
        return False

def send_reset_code_email(email: str, code: str) -> bool:
    try:
        from .config import settings
        import resend
        resend.api_key = settings.resend_api_key
        html_content = f"""
        <div style='font-family: Arial, sans-serif;'>
            <h2>Сброс пароля</h2>
            <p>Введите этот код для сброса пароля:</p>
            <div style='font-size: 32px; letter-spacing: 8px; font-weight: bold; color: #FF9800;'>{code}</div>
            <p style='color: #888; font-size: 12px;'>Код действует 10 минут.</p>
        </div>
        """
        params = {
            "from": f"{settings.resend_from_name} <{settings.resend_from_email}>",
            "to": [email],
            "subject": f"Код для сброса пароля в {settings.resend_from_name}",
            "html": html_content,
        }
        resend.Emails.send(params)
        return True
    except Exception as e:
        import logging
        logging.error(f"Ошибка отправки кода сброса на {email}: {e}")
        return False
