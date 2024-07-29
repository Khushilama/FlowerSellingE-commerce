from django.shortcuts import render
from .models import Product
from .serializers import ProductsSerailizer
from rest_framework.renderers import JSONRenderer
from  django.http import HttpResponse
# Create your views here.
def product_detail(request):
    product = Product.objects.all()
    serailzer = ProductsSerailizer(product, many=True)
    json_data = JSONRenderer().render(serailzer.data)
    return HttpResponse(json_data, content_type='application/json')

