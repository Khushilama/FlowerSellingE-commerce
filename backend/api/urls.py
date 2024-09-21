from django.urls import path
from .views import product_list_data, product_list, get_product, check_followers, AddtoCartViewSet
from rest_framework.routers import DefaultRouter

# Create a router for the viewset
router = DefaultRouter()
router.register(r'cart', AddtoCartViewSet)

urlpatterns = [
    path('products/', product_list_data, name='product_list_data'),
    path('products/<str:types>/', product_list, name='product_list'),
    path('products/<int:id>/', get_product, name='get_product'),
    path('check-followers/', check_followers, name='check_followers'),
]

# Include the router's URLs
urlpatterns += router.urls
