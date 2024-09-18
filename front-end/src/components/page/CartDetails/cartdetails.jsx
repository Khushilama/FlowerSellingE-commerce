import { useState, useEffect } from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Footer from '../../molecule/Footer/footer';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CartDetails() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/cart/');
        setCart(response.data);
      } catch (error) {
        setError('Failed to fetch cart data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartData();
  }, []);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRequests = cart.map(item =>
          axios.get(`http://127.0.0.1:8000/productlist/${item.product_id}/`)
        );
        const responses = await Promise.all(productRequests);
        setProductList(responses.map(response => response.data));
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cart]);

  const addToCart = async (item) => {
    try {
      await axios.post('http://localhost:8000/cart/', item);
      const response = await axios.get('http://localhost:8000/cart/');
      setCart(response.data);
    } catch (error) {
      setError('Failed to add item to cart');
    }
  };

  const removeFromCart = async (index) => {
    try {
      const item = cart[index];
      await axios.delete(`http://localhost:8000/cart/${item.id}/`);
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    } catch (error) {
      setError('Failed to remove item from cart');
    }
  };

  const updateQuantity = async (index, quantity) => {
    try {
      const item = cart[index];
      await axios.put(`http://localhost:8000/cart/${item.id}/`, { ...item, quantity });
      const newCart = [...cart];
      newCart[index].quantity = quantity;
      setCart(newCart);
    } catch (error) {
      setError('Failed to update item quantity');
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const productDetails = productList.find(p => p.id === item.product_id) || {};
      const price = productDetails.price || 0;
      const quantity = item.quantity || 0;
      return total + (price * quantity);
    }, 0);
  };

  const calculateShipping = () => {
    const shipping = cart.reduce((total, item) => {
      const shippingPrice = parseFloat(item.shipping_price) || 0;  // Ensure shipping price is a number
      console.log(`Item: ${item.product_id}, Shipping Price: ${shippingPrice}`); // Debugging line
      return total + shippingPrice;
    }, 0);
    console.log('Shipping:', shipping); // Debugging line
    return shipping;
  };

  const calculateGrandTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const grandTotal = subtotal + shipping;
    console.log('Grand Total:', grandTotal); // Debugging line
    return grandTotal;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <HeaderContent />
      <div className="bg-cream flex flex-col justify-between min-h-screen">
        <div className="bg-gray-200 p-4">
          <h1 className="text-center text-lg font-bold text-gray-800">PRODUCT DETAILS</h1>
          <div className="flex justify-around items-center text-sm font-medium text-gray-800">
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SHIPPING</p>
            <p>SUBTOTAL</p>
            <p>ACTION</p>
          </div>
          {cart.map((product, index) => {
            const productDetails = productList.find(p => p.id === product.product_id) || {};
            return (
              <div key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex items-center">
                  <img src={productDetails?.image ? `http://127.0.0.1:8000${productDetails.image}` : ""} alt={productDetails.name || 'Product'} className="w-20 h-20 rounded-md" />
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">{productDetails.product_name || 'Product Name'}</h2>
                    <p className="text-gray-600">Color: {product.color || 'N/A'}</p>
                    <p className="text-gray-600">Size: {product.size || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{(productDetails.price || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(index, product.quantity - 1)}
                    disabled={product.quantity === 1}
                    className="bg-gray-300 px-2 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="px-2 py-1">{product.quantity || 0}</span>
                  <button
                    onClick={() => updateQuantity(index, product.quantity + 1)}
                    className="bg-gray-300 px-2 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{(product.shipping_price || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{((productDetails.price || 0) * (product.quantity || 0)).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
                  >
                    <RiDeleteBin6Line />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-cream p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Sub Total</h2>
            <span className="text-lg font-bold text-gray-800">${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-lg font-bold text-gray-800">Shipping</h2>
            <span className="text-lg font-bold text-gray-800">${calculateShipping().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2 border-t border-gray-300 pt-2">
            <h2 className="text-lg font-bold text-gray-800">Grand Total</h2>
            <span className="text-lg font-bold text-gray-800">${calculateGrandTotal().toFixed(2)}</span>
          </div>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            onClick={() => navigate('/checkout')} // Navigate to checkout
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}

export default CartDetails;


