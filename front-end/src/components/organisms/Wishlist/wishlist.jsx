import React from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from "../../molecule/Footer/footer";
import cart from '../../../assets/Image/cart.png';
import { useNavigate } from 'react-router-dom';
function WishList() {
    const navigate = useNavigate();
  return (
    
    <>
    <HeaderContent/>
    <div className="flex flex-col items-center justify-center h-screen bg-cream-50">
        <div>
          <img src={cart} alt="cart is empty" />
        </div>
       
        <div className="mt-8 text-center text-xl">
          Your wishlist is empty and sad :(
        </div>
        <div className="mt-2 text-center text-sm text-gray-600">
          Add something to make it happy!
        </div>
        <button
          onClick={() => navigate('/flower')}
          className="mt-8 px-6 py-2 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Continue Shopping
        </button>
      </div>
    <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}

export default WishList;