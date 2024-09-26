from django.db import models
from django.utils import timezone
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
    coupon_code = models.CharField(max_length=20, blank=True, null=True)  # Make optional if needed
    shipping_price = models.IntegerField()
    gift_wrap_price = models.FloatField(default=0.0)  # Float field with a proper default

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
    


    
    
    def __str__(self):
        return f"Order {self.id} by {self.full_name}"


class Order(models.Model):
    product_id = models.CharField(max_length=25)  # Assuming this is a foreign key to another model like Cart
    full_name = models.CharField(max_length=25)
    email = models.EmailField(max_length=50)
    location = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)  # Use CharField to store phone numbers as strings
    order_date = models.DateTimeField(default=timezone.now)  # Use timezone.now for the current date and time
    estimate_delivery = models.DateTimeField(default=timezone.now() + timezone.timedelta(days=2))  # Estimate delivery in 2 days

    def __str__(self):
        return f"Order by {self.full_name} on {self.order_date}"