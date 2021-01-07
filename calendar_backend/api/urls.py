from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('view/<str:pk>', views.event_view, name="event_view"),
    path('create/', views.event_create, name="event_create"),
    path('update/<str:pk>', views.event_update, name = "event_update"),
    path('delete/<str:pk', views.event_delete, name="event_delete")
]