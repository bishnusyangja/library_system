from django.shortcuts import render

# Create your views here.

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

from libapp.permissions import IsStaffPermission
from user.serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import status

from rest_framework_jwt.authentication import JSONWebTokenAuthentication

class RegisterUserAPI(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = (AllowAny, )
