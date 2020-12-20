from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
import json

# Create your views here.

def index(request):
    return HttpResponse("Hello");
