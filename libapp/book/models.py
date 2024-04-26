from django.db import models
from django.utils.translation import gettext_lazy as _


class Book(models.Model):
    name = models.CharField(_('Name'), max_length=250)
    author = models.CharField(_('Author'), max_length=100)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name