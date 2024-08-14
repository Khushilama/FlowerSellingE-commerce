from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ProductList
from .serializer import ProductListserializers

@api_view(['GET'])
def product_list(request, types=None):
    if types is None:
        return Response({'error': 'Types parameter is required'}, status=400)
    
    try:
        # Filter the products by type
        products = ProductList.objects.filter(types=types)
        serializer = ProductListserializers(products, many=True)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)}, status=500)
