from book.models import Book

from rest_framework import serializers


class BookSerializer(serializers.ModelSerializer):
    created_on = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)
    updated_on = serializers.DateTimeField(format='%Y-%m-%d %H:%M:%S', read_only=True)

    class Meta:
        model = Book
        fields = ('id', 'name', 'author', 'created_on', 'updated_on')