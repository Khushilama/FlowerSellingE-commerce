from django.db import models

# Create your models here.

class Product(models.Model):
    product_name = models.CharField(max_length=100)
    price = models.IntegerField() 
    product_desc = models.CharField(max_length=400)
    categories = models.CharField(max_length=100)
    image = models.ImageField()


