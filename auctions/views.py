from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.core.files import File

import json

def index(request):
     
    return render(request, "auctions/index.html")

def save(request):
    if request.method == 'POST':

        personalDetails = {
            "full_name":  request.POST["full_name"],
            "profession":  request.POST["profession"],
            "address":  request.POST["address"],
            "email":  request.POST["email"],
            "phone":  request.POST["phone"],
            "summary":  request.POST["summary"],
        }
        
        f = open('file_to_save.txt', 'w')
        myfile = File(f)

        with open('file_to_save.txt', 'w') as f:
            myfile = File(f)
            myfile.write(json.dumps(personalDetails))
        
        myfile.closed
        f.closed

    return render(request, "auctions/index.html")