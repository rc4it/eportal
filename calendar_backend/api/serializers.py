from rest_framework import serializers
from .models import *
from pytz import timezone

class EventSerializer(serializers.ModelSerializer):
    detail = serializers.PrimaryKeyRelatedField(read_only = True)

    class Meta:
        model = Event
        fields = '__all__'