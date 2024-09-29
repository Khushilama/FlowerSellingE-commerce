from rest_framework import serializers
from .models import AddtoCart, Order
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

# serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if not user.is_active:
                    raise serializers.ValidationError("User is deactivated.")
            else:
                raise serializers.ValidationError("Invalid credentials.")
        else:
            raise serializers.ValidationError("Must include both username and password.")

        data["user"] = user
        return data

    def create(self, validated_data):
        user = validated_data["user"]
        refresh = RefreshToken.for_user(user)
        return {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "username": user.username,
            "last_login": user.last_login,
        }

class UserSignupSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password']
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(**validated_data)
        return user