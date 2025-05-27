from django.shortcuts import render
from django.utils.translation import get_language
from .utils import load_json_data as load_data
import json

def index(request):
    """
    Render the index page.
    """
    data = load_data()['data'] or {}



    context = {
        'destinations': data.get('destinations', []),
        "food" : data.get('food', []),
        "animals": data.get('animals', []),
        "art": data.get('art', []),
        "clients": data.get('clients', []),
    }
    return render(request, 'frontend/index.html',context=context)