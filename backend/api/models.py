from django.db import models

# Create your models here.
from django.db import models

class ProductList(models.Model):
    product_name = models.CharField(max_length=255)
    price = models.IntegerField()
    image = models.ImageField(upload_to='product_images/')
    product_desc = models.CharField(max_length=500)
    types =  models.CharField(max_length=100, default='flowers')
    categories = models.CharField(max_length=100)
