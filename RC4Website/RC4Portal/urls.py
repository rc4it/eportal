from django.urls import path

from . import views

app_name = "RC4Portal"
urlpatterns = [
    path("", views.index, name = "index"),
]