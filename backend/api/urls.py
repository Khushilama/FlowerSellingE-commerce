from django.urls import path
from .views import (

    product_list_data, 
    product_list, 
    get_product, 
    InfluencerViewSet,  
    AddtoCartViewSet, 
   
    OrderViewSet, 
    
)
from rest_framework.routers import DefaultRouter

# Create a router for the viewset
router = DefaultRouter()

# Register viewsets with unique basenames
router.register(r'cart', AddtoCartViewSet, basename='cart')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'influencer', InfluencerViewSet, basename='influencer')

urlpatterns = [
    path('products/', product_list_data, name='product_list_data'),
    path('products/<str:types>/', product_list, name='product_list'),
    path('products/<int:id>/', get_product, name='get_product'),
   
]

# Include the router's URLs
urlpatterns += router.urls
