from django import forms
from .models import ResponseModel


class ResponseModelForm(forms.ModelForm):
    class Meta:
        model = ResponseModel
        fields = ["first_name", "last_name", "email", "select", "message"]
