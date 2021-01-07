from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class User(AbstractUser):
    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    email = models.CharField(max_length=64)
    
    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class PersonalDetails(models.Model):
    full_name = models.CharField(max_length=100)
    profession = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    email_address = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    summary = models.CharField(max_length=500)

    def __str__(self):
        return f"{self.title}"