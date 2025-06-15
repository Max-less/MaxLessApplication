from fastapi import Depends, APIRouter
from .dependencies import get_current_user
from .models import User

router = APIRouter()

@router.get("/me")
def read_me(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "email": current_user.email,
        "nickname": current_user.nickname,
        "avatar_url": current_user.avatar_url
    }