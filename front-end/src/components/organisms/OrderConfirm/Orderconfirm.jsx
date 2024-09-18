import React from "react";
import HeaderContent from "../../page/HeaderContent/HeaderContent";
import Footer from "../../molecule/Footer/footer";
import Order from "../../../assets/Image/order.png";
import { useNavigate } from 'react-router-dom';
const OrderConfirmation = () => {
    const navigate = useNavigate();
  return (
    <>
      <HeaderContent />

      <div className="flex items-center justify-center h-screen bg-cream">
        <div className="flex flex-col items-center">
          <img
            src={Order}
            alt="Order Confirmation"
            onClick={() => navigate('/flower')}
          />
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default OrderConfirmation;
