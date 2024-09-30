from rest_framework import serializers
from .models import AddtoCart, Order,InfluencerUser
class ProductListserializers(serializers.Serializer):
    id = serializers.IntegerField()
    product_name = serializers.CharField(max_length=255)
    price = serializers.IntegerField()
    image = serializers.ImageField()
    product_desc = serializers.CharField(max_length=500)
    types = serializers.CharField(max_length=100)
    categories = serializers.CharField(max_length=100)
    
    # Convert comma-separated string to a list for color_available
    color_available = serializers.SerializerMethodField()
    
    # Convert comma-separated string to a list for size
    size = serializers.SerializerMethodField()

    def get_color_available(self, obj):
        return obj.color_available.split(',') if obj.color_available else []

    def get_size(self, obj):
        return obj.size.split(',') if obj.size else []
    



class AddtoCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddtoCart
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class InfluencerSerializer(serializers.ModelSerializer):
    class Meta:
        model = InfluencerUser
        fields = '__all__'
