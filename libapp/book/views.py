from django.db.models import Q
from book.models import Book
from book.serializer import BookSerializer
from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import IsAuthenticated


class BookAPI(ModelViewSet):
    serializer_class = BookSerializer
    permission_classes = (IsAuthenticated, )
    queryset = Book.objects.none()

    def get_queryset(self):
        qs = Book.objects.all()
        search = self.request.query_params.get('search')
        if search:
            qs = qs.filter(Q(name__icontains=search) | Q(author__icontains=search))
        return qs
