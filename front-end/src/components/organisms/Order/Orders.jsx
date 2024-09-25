import React from 'react';
import HeaderContent from '../../page/HeaderContent/HeaderContent';
import Footer from '../../molecule/Footer/footer';
const orders = [
  {
    orderNo: '#123456789',
    orderDate: '2 June 2023 2:40 PM',
    estimatedDeliveryDate: '8 June 2023',
    product: {
      name: 'Mari Gold',
      color: 'Purple',
      qty: 1,
      total: '$23.00',
    },
    orderStatus: 'Inprogress',
    paymentMethod: 'Cash on delivery',
  },
  {
    orderNo: '#123456789',
    orderDate: '2 June 2023 2:40 PM',
    estimatedDeliveryDate: '8 June 2023',
    product: {
      name: 'Jasmine',
      color: 'White',
      qty: 1,
      total: '$143.00',
    },
    orderStatus: 'Shipped',
    paymentMethod: 'Cash on delivery',
  },
  {
    orderNo: '#123456789',
    orderDate: '2 June 2023 2:40 PM',
    estimatedDeliveryDate: '8 June 2023',
    product: {
      name: 'Jasmine',
      color: 'Blue',
      qty: 1,
      total: '$93.00',
    },
    orderStatus: 'Inprogress',
    paymentMethod: 'Cash on delivery',
  },
];

const MyOrders = () => {
  return (
    <>
    <HeaderContent/>
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <div className="flex space-x-4 mb-4">
        <button className="bg-white px-4 py-2 rounded-md font-medium text-gray-800">
          Active
        </button>
      
      </div>
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white rounded-md shadow-md p-4 mb-4"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-medium">
              Order no: {order.orderNo}
            </h2>
            <span className="text-gray-600">
              {order.orderStatus}
            </span>
          </div>
          <div className="text-gray-700 text-sm mb-2">
            <p>Order Date: {order.orderDate}</p>
            <p>Estimated Delivery Date: {order.estimatedDeliveryDate}</p>
          </div>
          <div className="flex items-center mb-2">
            <img
              src={`path/to/image/${order.product.name.toLowerCase()}.jpg`}
              alt={order.product.name}
              className="w-16 h-16 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="font-medium">{order.product.name}</h3>
              <p>Colour: {order.product.color}</p>
              <p>Qty: {order.product.qty}</p>
              <p className="font-medium">Total: {order.product.total}</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Payment Method: {order.paymentMethod}
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md mt-4">
            View Detail
          </button>
        </div>
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default MyOrders;