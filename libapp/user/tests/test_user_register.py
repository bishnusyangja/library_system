from django.test import TestCase
from model_bakery import baker
from rest_framework.test import APIClient
from user.models import User


class RegisterUserAPITestCase(TestCase):
    client = APIClient()
    auth_token = ''

    def get_headers(self):
        headers = {}
        if self.auth_token:
            headers['HTTP_AUTHORIZATION'] = f'Token {self.auth_token}'
        return headers

    def setUp(self):
        self.headers = {'HTTP_AUTHORIZATION': f'Token {self.auth_token}', 'CONTENT_TYPE': 'application/json'}

    def test_user_registration_with_no_password(self):
        url = '/register/'
        data = {
                'first_name': 'Santosh',
                'last_name': 'Baral',
                'email': 'santa@gmail.com',
                'mobile': '9876543210',
                'password': 'abc',
                'confirm_password': '123'
            }
        resp = self.client.post(url, data=data, content_type='application/json', **self.get_headers())
        self.assertEqual(resp.status_code, 400)

    def test_user_registration_no_pass_match(self):
        url = '/register/'
        data = {
                'first_name': 'Santosh',
                'last_name': 'Baral',
                'email': 'santa@gmail.com',
                'mobile': '9876543210',
                'password': 'abc',
                'confirm_password': '123'
            }
        resp = self.client.post(url, data=data, content_type='application/json', **self.get_headers())
        self.assertEqual(resp.status_code, 400)

    def test_user_registration_success(self):
        url = '/register/'
        data = {
                'first_name': 'Santosh',
                'last_name': 'Baral',
                'email': 'santa@gmail.com',
                'mobile': '9876543210',
                'password': 'abc',
                'confirm_password': 'abc'
            }
        resp = self.client.post(url, data=data, content_type='application/json', **self.get_headers())
        self.assertEqual(resp.status_code, 201)
