from django.shortcuts import render
from .forms import ResponseModelForm
from django.core.mail import send_mail
import django.core.mail as h


# Create your views here.

def contact_us(request):
    form = ResponseModelForm(request.POST)
    if request.method == "POST":
        if form.is_valid():
            email = form.cleaned_data['email']
            send_mail('Hello', 'Hello', email, ['raghuvarapadma@gmail.com'])
            form.save()
    return render(request, 'contact/contact_us.html', {'form': form})
