import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Daisy from '../../../assets/Image/1.jpeg';
import Footer from '../../molecule/Footer/footer';
import HeaderContent from '../../page/HeaderContent/HeaderContent';

function Checkout() {
  const [fullName, setFullName] = useState('');
  const [cart, setCart] = useState([]);  // Initially set cart to null
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [giftWrap, setGiftWrap] = useState({ name: '', price: 45 });
  const navigate = useNavigate();
  const locate = useLocation();
  const { state } = locate;
  console.log(state)

  const totalItems = 3;
  const subtotal = 450;
  const savings = 0;
  const shipping = 0;
  const total = subtotal + giftWrap.price - savings + shipping;

  // Fetch cart data on component mount
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cart/");
         // Log the cart data
        setCart(response.data);  // Store the cart data
        console.log("Cart data fetched:", cart); 
      } catch (error) {
        setError("Failed to fetch cart data");
        console.error("Error fetching cart data:", error);  // Log the error
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);

  // Ensure that cart_id is updated when the cart data is fetched
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!cart || !cart.id) {
      setError('Cart data is not loaded properly.');  // Error handling if cart is not loaded
      return;
    }

    const orderData = {
      cart_id: cart.id,  // Use the cart's id
      full_name: fullName,
      email,
      location,
      phone: phone || null,
    };

    console.log(orderData);

    try {
      const response = await fetch('http://127.0.0.1:8000/order/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating order:', errorData);  // Log the error details
      } else {
        const result = await response.json();
        console.log('Order created successfully:', result);
        navigate('/orderconfirmation');
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

  return (
    <>
      <HeaderContent />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-1 mt-12">Check Out</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Billing Details</h2>
            <form onSubmit={handleSubmit}>
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

            <div className="border rounded p-4">
              <div className="border-b border-gray-300 pb-2 mb-2 flex items-center">
                <img src={Daisy} alt="Daisy" className="w-16 h-16 rounded-full" />
                <div className="ml-4 flex flex-col">
                  <span className="font-bold">Daisy</span>
                  <span className="text-gray-500">Color: Yellow</span>
                  <span className="font-bold">Rs.150</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Subtotal ({totalItems} items)</span>
                <span className="ml-2 font-bold">Rs.{subtotal}</span>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Savings</span>
                <span className="ml-2 font-bold">-Rs.{savings}</span>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Shipping</span>
                <span className="ml-2 font-bold">-Rs.{shipping}</span>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Gift Wrapping</span>
                <span className="ml-2 font-bold">Rs.{giftWrap.price}</span>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Total</span>
                <span className="ml-2 font-bold">Rs.{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}

export default Checkout;
