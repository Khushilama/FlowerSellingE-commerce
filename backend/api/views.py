from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from .models import ProductList,AddtoCart,Order
from .serializer import ProductListserializers, AddtoCartSerializer, OrderSerializer
from rest_framework import viewsets
import requests
from rest_framework.views import APIView
from rest_framework import status
from bs4 import BeautifulSoup
import json
from urllib.parse import urlparse
from .scraping import scrape_instagram_followers

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
    
    # Fetch the product by ID
    try:
        print(id)
        product = ProductList.objects.get(id=id)
        
        serializer = ProductListserializers(product)
        return Response(serializer.data)
    except ProductList.DoesNotExist:
        raise NotFound(detail='Product not found')
    


class InstagramFollowersScraperView(APIView):
    def get(self, request):
        # Get the URL from query parameters
        url = request.GET.get('url', None)
        
        # Debugging: print the URL
        print("Received URL:", url)

        if not url:
            return Response({'error': 'URL parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        # Check if URL is a string
        if not isinstance(url, str):
            return Response({'error': 'URL must be a string'}, status=status.HTTP_400_BAD_REQUEST)

        # Proceed with your scraping logic here
        try:
            # Example: Call your scraping function here
            followers = scrape_instagram_followers(url)  # Replace with your actual scraping function
            return Response({'followers': followers}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class AddtoCartViewSet(viewsets.ModelViewSet):
    queryset = AddtoCart.objects.all()
    serializer_class = AddtoCartSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


