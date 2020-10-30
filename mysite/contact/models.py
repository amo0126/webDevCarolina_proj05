from django.db import models


# Create your models here.
class ResponseModel(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=30)
    select = models.CharField(max_length=30)
    message = models.CharField(max_length=300)

    class Meta:
        managed = True
        db_table = "ResponseTable"
