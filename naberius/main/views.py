from django.shortcuts import render

def index(request):
    return render(request, 'main/static/reg/base.html')

def auth_view(request):
    return render(request, 'main/static/auth/base.html')

def reg_view(request):
    return render(request, 'main/static/reg/base.html')
