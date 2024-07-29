from rest_framework import serializers

class ProductsSerailizer(serializers.Serializer):
    product_name = serializers.CharField(max_length=100)
    price = serializers.IntegerField() 
    product_desc = serializers.CharField(max_length=400)
    categories = serializers.CharField(max_length=100)
    image = serializers.ImageField()


