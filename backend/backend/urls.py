from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from api import views
from rest_framework.routers import DefaultRouter

# Router for AddtoCartViewSet
router = DefaultRouter()
router.register(r'cart', views.AddtoCartViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
     path('productlist/', views.product_list_data, name='product-list-all'),
    path('productlist/<int:id>/', views.get_product, name='product-detail'),
    path('productlist/<str:types>/', views.product_list, name='product-list'),
     path('', include(router.urls)),  # This will include all CRUD routes for 'cart'

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
