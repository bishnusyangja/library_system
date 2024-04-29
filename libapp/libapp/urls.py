from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter

from book.views import BookAPI
from user.views import RegisterUserAPI

router = DefaultRouter()
router.register(r'book', BookAPI)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth-token/', obtain_jwt_token, name='jwt_token'),
    path('register/', RegisterUserAPI.as_view(), name='register'),

]

urlpatterns += router.urls
