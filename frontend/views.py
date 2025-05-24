from django.shortcuts import render
from django.utils.translation import get_language

def index(request):
    """
    Render the index page.
    """
    print(get_language())
    return render(request, 'frontend/index.html')