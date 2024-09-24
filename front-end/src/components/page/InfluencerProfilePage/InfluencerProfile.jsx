import React, { useState, useEffect } from 'react';
import Header from '../../templates/Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { AiOutlineUser } from 'react-icons/ai'; // Person icon

const InfluencerProfile = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/productlist/flowers/"
        );
        setProductList(response.data); // Adjust this based on API response
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="bg-cream p-8">
        {/* Profile section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-500 text-sm font-medium">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-2"></span>
            <a href="/" className="hover:underline">Influencer</a>
            <span className="mx-2"></span>
            <a href="/" className="hover:underline">My Profile</a>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Person icon instead of image */}
            <div className="rounded-full w-16 h-16 mr-4 flex items-center justify-center bg-gray-200">
              <AiOutlineUser size={48} className="text-gray-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Khushi Lama</h2>
            </div>
          </div>
        </div>

        {/* Flower description */}
        <div className="mt-8">
          <p className="text-gray-700">
            "Discover a vibrant selection of exquisite flowers that bring joy and beauty to every occasion. From elegant bouquets to charming arrangements, we have the perfect blooms for birthdays, anniversaries, weddings, and more."
          </p>
        </div>

        {/* Product List Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Liked</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-lg bg-white"
                onClick={() => navigate(`/productdetail/${product.id}`)}
              >
                <div>
                  <img
                    src={`http://127.0.0.1:8000${product.image}`} // Adjust the URL based on your server setup
                    alt={product.product_name}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                </div>
                <div className="absolute bg-white top-5 right-8">
                  <button className="focus:outline-none">
                    <CiHeart size={24} color="black" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  {product.product_name}
                </h2>
                <p className="text-gray-700 mb-4">{product.product_desc}</p>
                <div className="flex justify-between">
                  <div className="text-center">
                    <p className="text-green-500 font-bold">Rs.{product.price}</p>
                    <p className="text-gray-500">{product.categories}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerProfile;
