import React, { useState } from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from '../../molecule/Footer/footer';
import { useNavigate } from 'react-router-dom'; 
function Checkout() {
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      fullName,
      location,
      phone,
      email,
      paymentMethod,
    });
    navigate('/orderconfirmation'); 
  };

  return (
    <>
      <HeaderContent />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-1 mt-12">Check Out</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4"> {/* Adjust gap here */}
          <div>
            <h2 className="text-xl font-bold mb-2">Billing Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="location"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
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
                  <label
                    htmlFor="cashOnDelivery"
                    className="text-gray-700 text-sm font-bold"
                  >
                    Cash on Delivery
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="esewa"
                    name="paymentMethod"
                    value="E-Sewa"
                    checked={paymentMethod === 'E-Sewa'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mr-2"
                  />
                  <label
                    htmlFor="esewa"
                    className="text-gray-700 text-sm font-bold"
                  >
                    E-Sewa
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
                <img
                  src="https://via.placeholder.com/150"
                  alt="Yellow Rose"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 flex flex-col">
                  <span className="font-bold">Yellow Rose</span>
                  <span className="text-gray-500">Color: Yellow</span>
                  <span className="font-bold">$29.00</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2 flex items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Lotus"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 flex flex-col">
                  <span className="font-bold">Lotus</span>
                  <span className="text-gray-500">Color: Pink</span>
                  <span className="font-bold">$119.00</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2 flex items-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="White Flower"
                  className="w-16 h-16 rounded-full"
                />
                <div className="ml-4 flex flex-col">
                  <span className="font-bold">White Flower</span>
                  <span className="text-gray-500">Color: White</span>
                  <span className="font-bold">$123.00</span>
                </div>
              </div>

              <div className="border-b border-gray-300 pb-2 mb-2 mt-4">
                <span className="font-bold">Subtotal (3 items)</span>
                <span className="ml-2 font-bold">$513.00</span>
              </div>
              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Savings</span>
                <span className="ml-2 font-bold">-$30.00</span>
              </div>
              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Shipping</span>
                <span className="ml-2 font-bold">-$5.00</span>
              </div>
              <div className="border-b border-gray-300 pb-2 mb-2">
                <span className="font-bold">Total</span>
                <span className="ml-2 font-bold">$478.00</span>
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