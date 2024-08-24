import React from "react";
import Header from "../../templates/Header/Header";
import { IoStar } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import flower from "../../../assets/Image/dahlia.jpg";
import { FiShoppingCart } from "react-icons/fi";
const ProductDetail = () => {
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
                <button className="bg-gray-200 px-4 py-2 rounded-md">XS</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">S</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">M</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">L</button>
                <button className="bg-gray-200 px-4 py-2 rounded-md">XL</button>
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
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md flex items-center">
                <FiShoppingCart className="mr-2" />
                Add to cart
              </button>

              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md">
                $63.00
              </button>
            </div>
            <hr className="my-8" />
            <div className="flex flex-col md:flex-row md:space-x-8">
              <div className="flex items-center mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 10a3 3 0 100-6 3 3 0 000 6zM7 10a1 1 0 112 0 1 1 0 01-2 0z" />
                  <path d="M11 19a2 2 0 01-2-2H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 012 2v6a2 2 0 01-2 2H11z" />
                </svg>
                <span className="ml-2 text-gray-500">Secure payment</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 10a3 3 0 100-6 3 3 0 000 6zM7 10a1 1 0 112 0 1 1 0 01-2 0z" />
                  <path d="M11 19a2 2 0 01-2-2H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 012 2v6a2 2 0 01-2 2H11z" />
                </svg>
                <span className="ml-2 text-gray-500">Size & Fit</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 10a3 3 0 100-6 3 3 0 000 6zM7 10a1 1 0 112 0 1 1 0 01-2 0z" />
                  <path d="M11 19a2 2 0 01-2-2H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 012 2v6a2 2 0 01-2 2H11z" />
                </svg>
                <span className="ml-2 text-gray-500">Free shipping</span>
              </div>
              <div className="flex items-center mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M8 10a3 3 0 100-6 3 3 0 000 6zM7 10a1 1 0 112 0 1 1 0 01-2 0z" />
                  <path d="M11 19a2 2 0 01-2-2H7a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2v2h2a2 2 0 012 2v6a2 2 0 01-2 2H11z" />
                </svg>
                <span className="ml-2 text-gray-500">
                  Free Shipping & Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
