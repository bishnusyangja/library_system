from django.test import TestCase
from model_bakery import baker
from rest_framework.test import APIClient
from user.models import User


class RegisterUserAPITestCase(TestCase):
    client = APIClient()
    email = 'abc@gmail.com'
    password = '123'
    auth_token = ''
    url = '/api-auth-token/'

    def setUp(self):
        user = baker.make(User, email=self.email)
        user.set_password(self.password)
        user.save()

    def test_api_auth_token_wrong_password(self):
        url = '/api-auth-token/'
        data = {
                'email': self.email,
                'password': 'random_string_fasjflfjaslkfjsdl'
            }
        resp = self.client.post(url, data=data, content_type='application/json')
        self.assertEqual(resp.status_code, 400)

    def test_api_auth_token_right_password(self):
        url = '/api-auth-token/'
        data = {
                'email': self.email,
                'password': self.password
            }
        resp = self.client.post(url, data=data, content_type='application/json')
        self.assertEqual(resp.status_code, 200)
        self.assertIn('token', resp.json())