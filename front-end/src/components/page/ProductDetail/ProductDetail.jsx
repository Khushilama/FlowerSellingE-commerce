import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import
import Header from "../../templates/Header/Header";
import { IoStar } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import flower from "../../../assets/Image/dahlia.jpg";
import { FiShoppingCart } from "react-icons/fi";
import BuyButton from "../../atoms/BuyButton/buybutton";
import Footer from "../../molecule/Footer/footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();  // Destructure id from useParams
  const navigate = useNavigate(); // Initialize the navigate function

  const getData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/product/${id}/`);
      // Handle the response as needed
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getData(); // Fetch data when component mounts
  }, [id]); // Add id as a dependency

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={flower}
              alt="Product Image"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-bold mb-4">
              Beautiful Frame With Flowers and Ribbons
            </h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <IoStar className="text-yellow-400" />
                <span className="ml-2 text-gray-500">3.5</span>
              </div>
              <div className="flex items-center ml-4">
                <MdOutlineInsertComment className="text-gray-500" />
                <span className="ml-2 text-gray-500">120 comment</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Select Size</p>
              <div className="flex space-x-2 mt-2">
                <button className="bg-gray-200 px-4 py-2 rounded-md">S</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">M</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">L</button>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Colours Available</p>
              <div className="flex space-x-2 mt-2">
                <div className="h-4 w-4 rounded-full bg-gray-600"></div>
                <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                <div className="h-4 w-4 rounded-full bg-pink-500"></div>
                <div className="h-4 w-4 rounded-full bg-red-600"></div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button 
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md flex items-center"
                onClick={() => navigate('/cartdetails')}  // Navigate to the cart page
              >
                <FiShoppingCart className="mr-2" />
                Add to cart
              </button>

              <BuyButton onClick={() => alert('Buy Now')}>
                Buy Now
              </BuyButton>
              
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md">
                $63.00
              </button>
            </div>
            <hr className="my-8" />
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Description</h2>
              <p className="text-gray-600">
                This photo showcases a beautiful bridal bouquet featuring a vibrant
                mix of orange roses, white daisies, and yellow lilies, accented
                with lush green foliage. The bouquet is elegantly tied with a
                white ribbon, making it a perfect choice for a wedding.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="font-medium mb-1">Flower</p>
                  <p className="text-gray-600">Bio-washed Cotton</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Frame</p>
                  <p className="text-gray-600">Printed</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Ribbon</p>
                  <p className="text-gray-600">Regular-fit</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Neck</p>
                  <p className="text-gray-600">Round Neck</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Frame</p>
                  <p className="text-gray-600">Half-sleeves</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Cards</p>
                  <p className="text-gray-600">Casual</p>
                </div>
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
};

export default ProductDetail;
