from . import views
from django.urls import path

urlpatterns = [

    path('', views.index),
    path('Quiz/', views.que, name='questions')
]
