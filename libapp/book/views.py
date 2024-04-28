from django.shortcuts import render

# Create your views here.

# from rest_framework.generics import CreateAPIView
# from rest_framework.permissions import IsAuthenticated
#
# from libapp.permissions import IsStaffPermission
# from user.serializer import UserSerializer
# from rest_framework.response import Response
# from rest_framework import status
#
#
# class RegisterUserAPI(CreateAPIView):
#     serializer_class = UserSerializer
#     permission_classes = (IsAuthenticated, IsStaffPermission)
#
#     def create(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         password = serializer.validated_data.pop('password')
#         serializer.validated_data.pop('confirm_password')
#         self.perform_create(serializer)
#         headers = self.get_success_headers(serializer.data)
#         response = serializer.data
#         print(serializer.data)
#         return Response(response, status=status.HTTP_201_CREATED, headers=headers)