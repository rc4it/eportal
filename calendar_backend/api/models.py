from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=100)

    allday = models.BooleanField(default=False, null=True, blank=True)
    start = models.DateTimeField()
    end = models.DateTimeField()

    description = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=100)

    #to be implemented
    repeated = models.BooleanField(default=False, null=True, blank=True)

    # class RepeatedType(models.TextChoices):
    #     DAILY = 'DAILY', 'Every Day'
    #     WEEKLY = 'WEEKLY', 'Every Week'
    #     MONTHLY = 'MONTHLY', 'Every Month'
    #     YEARLY = 'YEARLY', 'Every Year'

    # repeated_type = models.CharField(
    #     max_length=32,
    #     choices = RepeatedType.choices
    #     #Can add default
    # )
    # repeated_start =models.DateTimeField(blank=True, null=True)
    # repeated_end = models.DateTimeField(blank=True, null=True)

    # class EventType(models.TextChoices):
    #     IG_SESSION = 'ig_session', 'Event : IG Session'
    #     OFFICIAL_EVENT = 'official_event', 'Event : Official Event'

    # event_type = models.CharField(
    #     max_length=32,
    #     choices = EventType.choices
    #     # Can add default by adding "default = <EventType.IG_SESSION or EventType.OFFICIAL_EVENT>"
    # )

    contact = models. CharField(max_length=100)

    def __str__(self):
        return f"{self.title}"

