from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
import json

# Create your views here.
# Todo : login, Logout, Register, Basic authentication
# Todo : Index
# Todo : Creating page to create event
# Todo : Implementing the Calendar
# Todo : Make general template of the html pages
# Todo : Controllers and Routes

def index(request):
    return HttpResponse("Hello")
