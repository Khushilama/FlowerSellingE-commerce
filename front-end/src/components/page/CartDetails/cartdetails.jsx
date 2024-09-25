import { useState, useEffect, useContext } from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import Footer from "../../molecule/Footer/footer";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GiftWrappingModal from "../../organisms/GiftWrappingModal/GiftWrappingModal";
import Floral from "../../../assets/Image/floral.jpeg";
import Black from "../../../assets/Image/black.jpeg";
import Blue from "../../../assets/Image/blue.jpeg";
import White from "../../../assets/Image/white.jpeg";

import { CartContext } from "../../../context/CartItemProvider";


function CartDetails() {
  const {cartItem, setCartItem  }=useContext(CartContext) 

  console.log(cartItem)

  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGiftWrap, setSelectedGiftWrap] = useState(null);
  const navigate = useNavigate();

  const giftWrappingOptions = [
    { id: 1, name: "Floral Wrap", image: Floral, price: 50 },
    { id: 2, name: "Black Wrap", image: Black, price: 60 },
    { id: 3, name: "Blue Wrap", image: Blue, price: 40 },
    { id: 4, name: "White Printed Wrap", image: White, price: 45 },
  ];

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/cart/");
        setCart(response.data);
  
        // Use the functional form to update cartItem
        setCartItem(prevCartItem => [...prevCartItem, ...response.data]);
      } catch (error) {
        setError("Failed to fetch cart data");
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchCartData();
  }, []);
  

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productRequests = cart.map((item) =>
          axios.get(`http://127.0.0.1:8000/productlist/${item.product_id}/`)
        );
        const responses = await Promise.all(productRequests);
        setProductList(responses.map((response) => response.data));
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [cart]);
  const removeFromCart = async (index) => {
    try {
      const item = cart[index];
      // Remove item from backend
      await axios.delete(`http://localhost:8000/cart/${item.id}/`);
  
      // Remove item from cart state
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
  
      // Update cartItem in context to reflect the removal
      setCartItem((prevCartItem) =>
        prevCartItem.filter((cartItem) => cartItem.id !== item.id)
      );
    } catch (error) {
      setError("Failed to remove item from cart");
    }
  };
  

  const updateQuantity = async (index, quantity) => {
    try {
      const item = cart[index];
      await axios.put(`http://localhost:8000/cart/${item.id}/`, {
        ...item,
        quantity,
      });
      const newCart = [...cart];
      newCart[index].quantity = quantity;
      setCart(newCart);
    } catch (error) {
      setError("Failed to update item quantity");
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const productDetails =
        productList.find((p) => p.id === item.product_id) || {};
      const price = productDetails.price || 0;
      const quantity = item.quantity || 0;
      return total + price * quantity;
    }, 0);
  };

  const calculateShipping = () => {
    return cart.reduce((total, item) => {
      const shippingPrice = parseFloat(item.shipping_price) || 0;
      return total + shippingPrice;
    }, 0);
  };

  const calculateGiftWrapTotal = () => {
    return selectedGiftWrap ? selectedGiftWrap.price : 0;
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateShipping() + calculateGiftWrapTotal();
  };

  const handleGiftWrapping = (option) => {
    setSelectedGiftWrap(option);
    setIsModalOpen(false); // Close the modal after selection
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <HeaderContent />
      <div className="bg-cream flex flex-col justify-between mt-16">
        <div className="p-4 shadow-md">
          <div className="flex justify-around items-center text-sm font-medium text-white bg-gray-800 h-16">
            <p>PRODUCT DETAILS</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>SHIPPING</p>
            <p>SUBTOTAL</p>
            <p>ACTION</p>
          </div>

          {cart.map((product, index) => {
            const productDetails =
              productList.find((p) => p.id === product.product_id) || {};
            return (
              <div key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300">
                <div className="flex items-center">
                  <img
                    src={productDetails?.image ? `http://127.0.0.1:8000${productDetails.image}` : ""}
                    alt={productDetails.name || "Product"}
                    className="w-20 h-20 rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-bold text-gray-800">{productDetails.product_name || "Product Name"}</h2>
                    <p className="text-gray-600">Color: {product.color || "N/A"}</p>
                    <p className="text-gray-600">Size: {product.size || "N/A"}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{(productDetails.price || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(index, product.quantity - 1)} disabled={product.quantity === 1} className="bg-gray-300 px-2 py-1 rounded-l">-</button>
                  <span className="px-2 py-1">{product.quantity || 0}</span>
                  <button onClick={() => updateQuantity(index, product.quantity + 1)} className="bg-gray-300 px-2 py-1 rounded-r">+</button>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{(product.shipping_price || 0).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-800">Rs.{((productDetails.price || 0) * (product.quantity || 0)).toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button onClick={() => removeFromCart(index)} className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600">
                    <RiDeleteBin6Line />
                  </button>
                  <button onClick={() => setIsModalOpen(true)} className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-md">
                    Gift Wrap
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-cream p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">Sub Total</h2>
            <span className="text-lg font-bold text-gray-800">Rs.{calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-lg font-bold text-gray-800">Shipping</h2>
            <span className="text-lg font-bold text-gray-800">Rs.{calculateShipping().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <h2 className="text-lg font-bold text-gray-800">Gift Wrapping</h2>
            <span className="text-lg font-bold text-gray-800">Rs.{calculateGiftWrapTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mt-2 border-t border-gray-300 pt-2">
            <h2 className="text-lg font-bold text-gray-800">Grand Total</h2>
            <span className="text-lg font-bold text-gray-800">Rs.{calculateGrandTotal().toFixed(2)}</span>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-600" onClick={() => navigate("/checkout", { state: {cart,productList}  })}>
            Proceed To Checkout
          </button>
        </div>
      </div>

      <GiftWrappingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        options={giftWrappingOptions}
        onSelect={handleGiftWrapping}
      />
      <Footer />
    </>
  );
}

export default CartDetails;
