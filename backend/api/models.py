from django.db import models

class ProductList(models.Model):
    product_name = models.CharField(max_length=255)
    price = models.IntegerField()
    image = models.ImageField(upload_to='product_images/') 
    product_desc = models.CharField(max_length=500)
    types = models.CharField(max_length=100, default='flowers')
    categories = models.CharField(max_length=100)
    
    # Store color_available as a comma-separated string
    color_available = models.CharField(max_length=500, default="red,yellow,green,gray")
    
    # Store size as a comma-separated string
    size = models.CharField(max_length=500, default="M,S,L")

    def __str__(self):
        return self.product_name
    
    # Method to get color_available as a list
    def get_color_available(self):
        return self.color_available.split(',')
    
    # Method to get size as a list
    def get_size(self):
        return self.size.split(',')




class AddtoCart(models.Model):
    product_id = models.IntegerField()
    quantity = models.IntegerField()
    color = models.CharField(max_length=20)
    size = models.CharField(max_length=20)
    coupon_code = models.CharField(max_length=20)
    shipping_price = models.IntegerField()

    def __str__(self):
        return f'Product ID: {self.product_id}, Quantity: {self.quantity}'
    

# class SignUp(models.Model):
#     name = models.CharField(max_length=50)
#     email = models.EmailField()
#     password = models.CharField()
#     profile_image = models.ImageField(upload_to='profile_images/') 


#wishlist model
class WishList(models.Model):
    product_id = models.IntegerField()
    
    def __str__(self):
        return f'Product ID: {self.product_id}'
    