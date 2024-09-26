import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Daisy from '../../../assets/Image/1.jpeg';
import Footer from '../../molecule/Footer/footer';
import HeaderContent from '../../page/HeaderContent/HeaderContent';

function Checkout() {
  const [fullName, setFullName] = useState('');
  const [cart, setCart] = useState([]); // Initialize cart as an empty array
  const [productList, setProductList] = useState([]);
  const [productNames, setProductNames] = useState('');  // State for product names
  const [productPrices, setProductPrices] = useState(''); // State for product prices
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const locate = useLocation();
  const [image, setImage] = useState(Daisy);
  const { state } = locate;

  const savings = 0;
  const shipping = 0;

  // Fetch cart data on component mount
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cart/");
        setCart(response.data); // Store the cart data
      } catch (error) {
        setError("Failed to fetch cart data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCartData();
  }, []);

  const removeFromCart = async () => {
    try {
      // Remove all items from the cart
      await Promise.all(cart.map(item =>
        axios.delete(`http://localhost:8000/cart/${item.id}/`)
      ));
      setCart([]); // Clear local cart state
    } catch (error) {
      setError("Failed to remove items from cart");
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        if (cart.length > 0) {
          const productRequests = cart.map((item) =>
            axios.get(`http://127.0.0.1:8000/productlist/${item.product_id}/`)
          );
          const responses = await Promise.all(productRequests);
          const products = responses.map((response) => response.data);
          setProductList(products);

          // Set product names and prices
          const names = products.map(product => product.product_name).join(', ');
          const prices = products.map(product => product.price).join(', ');
          setImage(products[0].image);
          setProductNames(names);
          setProductPrices(prices);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    if (cart.length > 0) {
      fetchProductDetails();
    }
  }, [cart]);

  // Calculate subtotal and total items
  const calculateTotals = () => {
    let subtotal = 0;
    let totalItems = 0;
    let giftWrap = 0;

    cart.forEach(item => {
      const product = productList.find(p => p.id === item.product_id);
      if (product) {
        subtotal += product.price * item.quantity + item.gift_wrap_price;
        totalItems += item.quantity; // Count total items
        giftWrap += item.gift_wrap_price;
      }
    });

    return { subtotal, totalItems , giftWrap};
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0 || !cart[0].product_id) {
      setError('Cart data is not loaded properly.');
      return;
    }

    const product_ids = cart.map(item => item.product_id).toString();  // Collect all product_id from the cart
    
    const { subtotal } = calculateTotals(); // Get subtotal for the order

    const orderData = {
      product_id: product_ids,  // Store the array of product_ids
      full_name: fullName,
      email,
      location,
      phone: phone || null,
      subtotal,  // Use calculated subtotal
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') === -1) {
        console.error('Expected JSON, but got:', contentType);
        const text = await response.text();
        console.error('Response body:', text);
        return;
      }

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating order:', errorData);
      } else {
        const result = await response.json();
        console.log('Order created successfully:', result);
        navigate('/orderconfirmation');
        removeFromCart(); // Remove all items after successful order submission
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
    }
  };

  if (isLoading) {
    return <p>Loading cart...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { subtotal, totalItems, giftWrap } = calculateTotals();  // Get subtotal and item count for the order summary

  function toTitleCase(str) {
    return str
      .toLowerCase() // Convert the entire string to lowercase first
      .split(' ') // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(' '); // Join the words back into a single string
  }

  return (
    <>
      <HeaderContent />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-1 mt-12">Check Out</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Billing Details</h2>
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              {/* Location */}
              <div className="mb-4">
                <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">
                  Location*
                </label>
                <input
                  type="text"
                  id="location"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div> 

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone*
                </label> 
                <input
                  type="text"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email*
                </label>
                <input
                  type="text"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Payment Method */}
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Payment Method</h2>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={paymentMethod === 'Cash on Delivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label htmlFor="cashOnDelivery" className="text-gray-700 text-sm font-bold">
                    Cash on Delivery
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Continue to delivery
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2 mt-1">Order Summary</h2>

            <div className="border border-gray-300 p-4 rounded">
              {cart.length > 0 && (
                <>
                  {productList.map((product, index) => {
                    const cartItem = cart[index];
                    return (
                      <div key={product.id} className="flex items-center mb-4">
                        <img
                          src={`http://127.0.0.1:8000${product.image}` || Daisy}
                          alt={product.product_name}
                          className="w-16 h-16 object-cover mr-4"
                        />
                        <div className='flex justify-between flex-1'>
                          <div >
                          <h3 className="text-lg font-semibold">{product.product_name}</h3>
                          <p className="text-sm text-gray-600">Color: {toTitleCase(cartItem.color)}</p>
                          </div>
                          <div>
                          <p className="text-sm text-gray-600">Price: Rs.{product.price}</p>
                          </div>
                          
                        </div>
                      </div>
                    );
                  })}

                  <hr className="my-4" />
                  <p className="text-lg font-bold">Subtotal ({totalItems} items): Rs.{subtotal}</p>
                  <p className="text-lg font-bold">Savings: Rs.{savings}</p>
                  <p className="text-lg font-bold">Shipping: Rs.{shipping}</p>
                  <p className="text-lg font-bold">Wrapping: Rs.{giftWrap}</p>
                  <p className="text-lg font-bold">Total: Rs.{subtotal}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
