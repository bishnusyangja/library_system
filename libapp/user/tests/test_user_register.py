from django.test import TestCase
from rest_framework.test import APIClient


class RegisterUserAPITestCase(TestCase):
    client = APIClient()
    url = '/register/'

    def test_user_registration_with_no_password(self):

        data = {
                'first_name': 'Santosh',
                'last_name': 'Baral',
                'email': 'santa@gmail.com',
                'mobile': '9876543210',
                'password': 'abc',
                'confirm_password': '123'
            }
        resp = self.client.post(self.url, data=data, content_type='application/json')
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
        resp = self.client.post(self.url, data=data, content_type='application/json')
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
        resp = self.client.post(self.url, data=data, content_type='application/json')
        self.assertEqual(resp.status_code, 201)
