from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
from django.shortcuts import render
from django.contrib import admin

def greeting_service(request):
    return HttpResponse("Hello, world!")