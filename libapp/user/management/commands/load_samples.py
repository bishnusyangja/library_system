from django.core.management.base import BaseCommand
from user.models import User
from book.models import Book
from model_bakery import baker


class Command(BaseCommand):
    help = 'Loads sample data'

    def handle(self, *args, **options):
        # abc_user = baker.make(User, first_name='ABC', last_name='Sharma', email='abc@example.com')
        # self.stdout.write('Created user successfylly ... ')

        baker.make(Book, name='Game Play', _quantity=30)
        baker.make(Book, name='Writing and Speaking')
        baker.make(Book, name='Reading and Speaking')

        self.stdout.write('Created books sucessfully ... ')