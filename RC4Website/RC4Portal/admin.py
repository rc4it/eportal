from django.contrib import admin
from .models import *

# Register your models here.

# To do : organize the list_display for both User and Event


admin.site.register(User)
admin.site.register(Event)