from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EventSerializer
from .models import Event
from pytz import timezone
from datetime import datetime

# Create your views here.

@api_view(['GET'])
def index(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def event_view(request, pk):
    event = Event.objects.get(id = pk)
    serializer = EventSerializer(event, many=False)

    return Response(serializer.data)
    
@api_view(['POST'])
def event_create(request):
    data_object = request.data
    
    #Alter start and end so it can be added to database
    data_object["start"] += "+0800"
    data_object["end"] += "+0800"

    data_object["start"] = datetime.strptime(data_object["start"], "%d/%m/%Y %H:%M%z").astimezone(timezone('UTC'))
    data_object["end"] = datetime.strptime(data_object["end"], "%d/%m/%Y %H:%M%z").astimezone(timezone('UTC'))

    serializer = EventSerializer(data = data_object)

    if serializer.is_valid():
        serializer.save()

    return Response("Event Created")

@api_view(['POST'])
def event_update(request, pk):
    event = Event.objects.get(id = pk)
    serializer = EventSerializer(instance = event, data = request.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def event_delete(request, pk):
    event = Event.objects.get(id = pk)
    event.delete()
    
    return Response("Event Succesfully deleted")
