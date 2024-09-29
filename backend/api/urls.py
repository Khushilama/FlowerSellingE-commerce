from django.urls import path
from .views import product_list_data, product_list, get_product,  AddtoCartViewSet,InstagramFollowersScraperView, OrderViewSet,signup_view, login_view, logout_view
from rest_framework.routers import DefaultRouter
from . import views


# Create a router for the viewset
router = DefaultRouter()
router.register(r'cart', AddtoCartViewSet)

router.register(r'order',OrderViewSet )

urlpatterns = [
    path('products/', product_list_data, name='product_list_data'),
    path('products/<str:types>/', product_list, name='product_list'),
    path('products/<int:id>/', get_product, name='get_product'),
    path('api/instagram-scraper/', InstagramFollowersScraperView.as_view(), name='instagram-scraper'),
    path('signup/', signup_view, name='signup'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout')
]

# Include the router's URLs
urlpatterns += router.urls
