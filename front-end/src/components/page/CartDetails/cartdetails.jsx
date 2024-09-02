import { useState } from 'react';
import HeaderContent from '../HeaderContent/HeaderContent';
import Footer from '../../molecule/Footer/footer';

function CartDetails() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const updateQuantity = (index, quantity) => {
    const newCart = [...cart];
    newCart[index].quantity = quantity;
    setCart(newCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    return cart.reduce((total, item) => total + (item.shipping), 0);
  };

  const calculateGrandTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const products = [
    {
      id: 1,
      name: 'Yellow Rose',
      image: 'https://images.unsplash.com/photo-1519745154869-14f27a9c83d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      color: 'Yellow',
      size: 'M',
      price: 29,
      quantity: 1,
      shipping: 0,
    },
    {
      id: 2,
      name: 'Lotus',
      image: 'https://images.unsplash.com/photo-1576134208791-4d4589e7fc60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      color: 'Pink',
      size: 'S',
      price: 119,
      quantity: 2,
      shipping: 0,
    },
    {
      id: 3,
      name: 'White Flower',
      image: 'https://images.unsplash.com/photo-1499642441022-4c3459d6426e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      color: 'Black',
      size: 'S',
      price: 123,
      quantity: 2,
      shipping: 5,
    },
  ];

  return (
    <>
    <HeaderContent/>
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
        {products.map((product, index) => (
          <div key={product.id} className="flex justify-between items-center p-4 border-b border-gray-300">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="w-20 h-20 rounded-md" />
              <div className="ml-4">
                <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">Color: {product.color}</p>
                <p className="text-gray-600">Size: {product.size}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(index, product.quantity - 1)}
                disabled={product.quantity === 1}
                className="bg-gray-300 px-2 py-1 rounded-l"
              >
                -
              </button>
              <span className="px-2 py-1">{product.quantity}</span>
              <button
                onClick={() => updateQuantity(index, product.quantity + 1)}
                className="bg-gray-300 px-2 py-1 rounded-r"
              >
                +
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">${product.shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-800">${(product.price * product.quantity).toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => addToCart(product)}
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h14a1 1 0 000-2H3zM5 4a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V5a1 1 0 011-1h3zM10 4a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V5a1 1 0 011-1h3zM15 4a1 1 0 011 1v10a1 1 0 01-1 1h-3a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-cream p-4">
        <h2 className="text-lg font-bold text-gray-800">Discount Codes</h2>
        <p className="text-gray-600">Enter your coupon code if you have one</p>
        <div className="flex items-center mt-4">
          <input
            type="text"
            className="bg-gray-200 px-4 py-2 rounded-l focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            placeholder="Enter your coupon code"
          />
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-r hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
            onClick={() => alert('Coupon applied!')}
          >
            Apply Coupon
          </button>
        </div>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50"
          onClick={() => alert('Continuing shopping!')}
        >
          Continue Shopping
        </button>
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
          onClick={() => alert('Proceeding to checkout!')}
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