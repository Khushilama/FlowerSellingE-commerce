from django.contrib import admin
from .models import ProductList

@admin.register(ProductList)
class ProductListAdmin(admin.ModelAdmin):
    list_display = ['id', 'product_name', 'price', 'image', 'product_desc', 'types','categories','color_available','size']
