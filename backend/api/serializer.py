from rest_framework import serializers
class ProductListserializers(serializers.Serializer):
    product_name = serializers.CharField(max_length=255)
    price = serializers.IntegerField()
    image = serializers.ImageField()
    product_desc = serializers.CharField(max_length=500)
    types = serializers.CharField(max_length=100)
    categories = serializers.CharField(max_length=100)