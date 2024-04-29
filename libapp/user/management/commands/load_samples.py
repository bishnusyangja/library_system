from django.core.management.base import BaseCommand
from user.models import User
from book.models import Book
from model_bakery import baker


class Command(BaseCommand):
    help = 'Loads sample data'

    def handle(self, *args, **options):
        baker.make(Book, name='Nothing is impossible', author='Ramesh Guragain')
        baker.make(Book, name='Writing and Speaking', author='Sandesh Satyal')
        baker.make(Book, name='Making Sentences in Nepali', author='Abhram John')
        baker.make(Book, name='Developed Country in the World', author='Chris Norman')
        baker.make(Book, name='Everything is easy', author='Dan Joy')
        self.stdout.write('Created books sucessfully ... ')