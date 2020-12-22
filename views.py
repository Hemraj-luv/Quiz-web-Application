from django.shortcuts import render


# Create your views here.
def index(request):
    return render(request, 'quizapp/home.html')


def que(request):
    return render(request, 'quizapp/questions.html')
