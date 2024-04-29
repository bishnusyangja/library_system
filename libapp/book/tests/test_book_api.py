from django.test import TestCase
from model_bakery import baker
from rest_framework.test import APIClient

from book.models import Book
from user.models import User


class RegisterUserAPITestCase(TestCase):
    client = APIClient()
    email = 'abc@gmail.com'
    password = '123'
    jwt = ''
    url = '/book/'

    def setUp(self):
        login_url = '/api-auth-token/'
        user = baker.make(User, email=self.email)
        user.set_password(self.password)
        user.save()
        resp = self.client.post(
                        login_url,
                        data={'email': self.email, 'password': self.password},
                        content_type='application/json')
        self.jwt = resp.json()['token']

    def get_headers(self):
        return {'Authorization': 'JWT {}'.format(self.jwt)}

    def test_list_book_api(self):
        resp = self.client.get(self.url, content_type='application/json', headers=self.get_headers())
        self.assertEqual(resp.status_code, 200)

    def test_create_book_api_empty_data(self):
        data = {}
        resp = self.client.post(self.url, data=data, content_type='application/json', headers=self.get_headers())
        self.assertEqual(resp.status_code, 400)

    def test_create_book_api_full_data(self):
        data = {'name': 'Very good book', 'author': 'Someone else'}
        resp = self.client.post(self.url, data=data, content_type='application/json', headers=self.get_headers())
        self.assertEqual(resp.status_code, 201)
        self.assertIn('name', resp.json())
        self.assertIn('author', resp.json())

    def test_delete_book_api(self):
        book = baker.make(Book)
        resp = self.client.delete(f'{self.url}{book.id}/', headers=self.get_headers())
        self.assertEqual(resp.status_code, 204)

    def test_update_book_api(self):
        book = baker.make(Book)
        data = {'name': 'Very good book', 'author': 'Someone else'}
        resp = self.client.put(f'{self.url}{book.id}/', data=data, content_type='application/json', headers=self.get_headers())
        self.assertEqual(resp.status_code, 200)
        result = resp.json()
        self.assertEqual(result['name'], data['name'])
        self.assertEqual(result['author'], data['author'])

    def test_book_search_api(self):
        baker.make(Book, name='something good', author='handsome boy', _quantity=3)
        baker.make(Book, name='something')