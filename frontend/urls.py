from . import views 
from django.urls import path

app_name = 'frontend'

urlpatterns = [
    path('', views.index, name='index'),
]
