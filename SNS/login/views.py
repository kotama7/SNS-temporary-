from django.shortcuts import render
from atproto import Client

# Create your views here.
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        client = Client()
        client.login(username, password)
        return render(request, 'home.html')
    else:
        return render(request, 'login.html')