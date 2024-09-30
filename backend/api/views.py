from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from .models import ProductList, AddtoCart, Order,InfluencerUser
from .serializer import ProductListserializers, AddtoCartSerializer, OrderSerializer, InfluencerSerializer
from rest_framework import viewsets
import requests
from rest_framework.authtoken.models import Token

from rest_framework import status
from django.shortcuts import render, redirect

from rest_framework.response import Response




# Product and Order APIs
@api_view(['GET'])
def product_list_data(request):
    products = ProductList.objects.all()
    serializer = ProductListserializers(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_list(request, types=None):
    if types is None:
        return Response({'error': 'Types parameter is required'}, status=400)

    # Filter the products by type
    products = ProductList.objects.filter(types=types)
    serializer = ProductListserializers(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_product(request, id=None):
    if id is None:
        return Response({'error': 'ID parameter is required'}, status=400)

    try:
        product = ProductList.objects.get(id=id)
        serializer = ProductListserializers(product)
        return Response(serializer.data)
    except ProductList.DoesNotExist:
        raise NotFound(detail='Product not found')


# Viewsets for Add to Cart and Order Management
class AddtoCartViewSet(viewsets.ModelViewSet):
    queryset = AddtoCart.objects.all()
    serializer_class = AddtoCartSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class InfluencerViewSet(viewsets.ModelViewSet):
    queryset = InfluencerUser.objects.all()
    serializer_class = InfluencerSerializer
