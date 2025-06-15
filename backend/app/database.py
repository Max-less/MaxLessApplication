from sqlmodel import SQLModel, create_engine, Session
from .config import DATABASE_URL

engine = create_engine(DATABASE_URL, echo=True)

def init_db():
    try:
        # Проверка подключения
        with engine.connect() as conn:
            print("✅ Подключение к базе успешно!")
        SQLModel.metadata.create_all(engine)
    except Exception as e:
        print(f"❌ Ошибка подключения: {e}")
        raise

def get_session():
    with Session(engine) as session:
        yield session