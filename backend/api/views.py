from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from .models import ProductList, AddtoCart
from .serializer import ProductListserializers, AddtoCartSerializer
from rest_framework import viewsets
import requests  # type: ignore # Import requests for making API calls

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
        product = ProductList.objects.get(id=id)
        serializer = ProductListserializers(product)
        return Response(serializer.data)
    except ProductList.DoesNotExist:
        raise NotFound(detail='Product not found')

@api_view(['GET'])
def check_followers(request):
    access_token = request.GET.get('access_token')  # Get access token from query parameters

    if not access_token:
        return Response({'error': 'Access token is required'}, status=400)

    try:
        # Fetch Instagram account data
        url = f'https://graph.instagram.com/me?fields=followers_count&access_token={access_token}'
        response = requests.get(url)
        response_data = response.json()

        followers_count = response_data.get('followers_count', 0)

        # Check if followers are above 5k
        is_influencer = followers_count >= 5000

        return Response({'isInfluencer': is_influencer, 'followers': followers_count})

    except Exception as e:
        return Response({'error': 'Unable to fetch follower count'}, status=500)

class AddtoCartViewSet(viewsets.ModelViewSet):
    queryset = AddtoCart.objects.all()
    serializer_class = AddtoCartSerializer
