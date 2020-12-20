from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
# Todo : Update the models fields if necessary


class User(AbstractUser):
    #id and name can be inherited from AbstractUser
    contact = models.CharField(max_length=8)
    organisation = models.CharField(max_length=32)
    role = models.CharField(max_length=32)

class Event(models.Model):
    name = models.CharField(max_length=32)

    organiser = models.ForeignKey("User", on_delete = models.CASCADE, related_name = "events")
    location = models.CharField(max_length=32)
    start = models.DateTimeField()
    end = models.DateTimeField
    description = models.TextField()

    class EventType(models.TextChoices):
        IG_SESSION = 'ig_session', 'Event : IG Session'
        OFFICIAL_EVENT = 'official_event', 'Event : Official Event'

    event_type = models.CharField(
        max_length=32,
        choices = EventType.choices
        # Can add default by adding "default = <EventType.IG_SESSION or EventType.OFFICIAL_EVENT>"
    )
    is_repeated = models.BooleanField()
