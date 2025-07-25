from fastapi import HTTPException

class UserNotFoundError(HTTPException):
    def __init__(self):
        super().__init__(status_code=404, detail="User not found")

class EmailAlreadyExistsError(HTTPException):
    def __init__(self):
        super().__init__(status_code=400, detail="Email already registered")