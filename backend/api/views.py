from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from .models import ProductList
from .serializer import ProductListserializers

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

