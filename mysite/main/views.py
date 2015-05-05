from django.shortcuts import render

def main_view(request):
    return render(request, 'index.html')


def uvod(request):
    return render(request, 'partials/uvod.html')