from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import NotFound
from .models import ProductList, AddtoCart, Order
from .serializer import ProductListserializers, AddtoCartSerializer, OrderSerializer
from rest_framework import viewsets
import requests
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework import status
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate
from django.http import JsonResponse
import instaloader  # Added Instaloader import


# User Authentication Views
# def signup_view(request):
#     if request.method == 'POST':
#         form = UserCreationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect('dashboard')
#     else:
#         initial_data = {'fullname': '', 'email': '', 'password1': '', 'password2': ""}
#         form = UserCreationForm(initial=initial_data)
#     return render(request, 'front-end/src/components/organisms/SignUp/signup.jsx', {'form': form})


# def login_view(request):
#     if request.method == 'POST':
#         form = AuthenticationForm(request, data=request.POST)
#         if form.is_valid():
#             user = form.get_user()
#             login(request, user)
#             return redirect('homepage')
#     else:
#         initial_data = {'email': '', 'password': ''}
#         form = AuthenticationForm(initial=initial_data)
#     return render(request, 'front-end/src/components/organisms/LogInPage/login.jsx', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('login')
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializer import LoginSerializer

class LoginAPIView(generics.CreateAPIView):
    """
    API view to handle user login and return JWT tokens upon successful authentication.
    """
    serializer_class = LoginSerializer

    def create(self, request, *args, **kwargs):
        """
        Overriding the create method to handle the response after user authentication.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token_data = serializer.save()
        return Response(token_data, status=status.HTTP_200_OK)


# class LogoutAPIView(generics.GenericAPIView):
#     """
#     API view to handle user logout by blacklisting the refresh token.
#     """
#     def post(self, request, *args, **kwargs):
#         try:
#             refresh_token = request.data.get("refresh_token")
#             token = RefreshToken(refresh_token)
#             token.blacklist()
#             return Response(status=status.HTTP_205_RESET_CONTENT)
#         except Exception as e:
#             return Response(status=status.HTTP_400_BAD_REQUEST)


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


# Instagram Followers Scraper using Instaloader
class InstagramFollowersScraperView(APIView):
    def get(self, request):
        influencer_username = request.GET.get('username', None)

        if not influencer_username:
            return Response({'error': 'Username parameter is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Set up Instaloader
            L = instaloader.Instaloader()
            
            # Optional: Authenticate with your Instagram credentials
            username = "YOUR_INSTAGRAM_USERNAME"
            password = "YOUR_INSTAGRAM_PASSWORD"

            try:
                L.login(username, password)
            except instaloader.exceptions.BadCredentialsException:
                return Response({'error': 'Invalid Instagram login credentials'}, status=status.HTTP_403_FORBIDDEN)

            # Get the profile of the influencer
            profile = instaloader.Profile.from_username(L.context, influencer_username)

            # Extract follower count
            followers_count = profile.followers

            # Optionally, extract additional data if needed
            following_count = profile.followees
            bio = profile.biography
            profile_pic = profile.profile_pic_url

            data = {
                'username': influencer_username,
                'followers_count': followers_count,
                'following_count': following_count,
                'bio': bio,
                'profile_pic_url': profile_pic,
            }

            return Response(data, status=status.HTTP_200_OK)

        except instaloader.exceptions.ProfileNotExistsException:
            return Response({'error': f"Profile '{influencer_username}' not found"}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# views.py
from rest_framework import generics
from .serializer import UserSignupSerializer
from django.contrib.auth.models import User

class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignupSerializer
