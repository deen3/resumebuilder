from django.contrib import admin

from .models import User, PersonalDetails

# Register your models here.


admin.site.register(User)
admin.site.register(PersonalDetails)