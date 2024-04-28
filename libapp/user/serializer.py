import re

from user.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'mobile', 'password', 'confirm_password', )

    def validate_mobile(self, value):
        pattern = r'9[0-9]{9}'
        if re.match(pattern, value):
            return value
        else:
            raise serializers.ValidationError('Enter a valid mobile number')

    def validate(self, attrs):
        password = attrs.get('password', '')
        confirm_password = attrs.get('confirm_password', '')
        if not password:
            raise serializers.ValidationError({'password': 'Password is required'})
        if not password == confirm_password:
            raise serializers.ValidationError({'confirm_password': 'Confirm password is required'})
        return attrs

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data.pop('confirm_password')
        instance = super().create(validated_data)
        instance.set_password(password)
        return instance