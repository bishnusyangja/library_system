

from rest_framework.generics import CreateAPIView

from book.models import Book
from book.serializer import BookSerializer
from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import IsAuthenticated


class BookAPI(ModelViewSet):
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Book.objects.all()
