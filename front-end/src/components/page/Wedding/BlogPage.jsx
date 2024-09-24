import React, { useState, useEffect, useContext } from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import axios from "axios";
import Footer from "../../molecule/Footer/footer";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../../organisms/WishlistContext/WishlistProvider";

const BlogPage = () => {
  const { WishlistItem, setWishlistItem } = useContext(WishlistContext);
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/productlist/Wedding/"
      );
      setProductList(response.data); 
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to handle adding/removing items from wishlist
  const handleWishlistClick = (product) => {
    if (WishlistItem.some((item) => item.id === product.id)) {
      // If product is already in the wishlist, remove it
      setWishlistItem(WishlistItem.filter((item) => item.id !== product.id));
    } else {
      // If product is not in the wishlist, add it
      setWishlistItem([...WishlistItem, product]);
    }
  };

  return (
    <>
      <HeaderContent />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg bg-white relative"
              onClick={() => navigate(`/productdetail/${product.id}`)}
            >
              <img
                src={`http://127.0.0.1:8000${product.image}`}
                alt={product.product_name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">
                {product.product_name}
              </h2>
              <p className="text-gray-700 overflow-auto p-2 mb-4 h-48">
                {product.product_desc}
              </p>

              <div className="flex justify-between mb-4">
                <div>
                  <p className="text-green-500 font-bold">Rs.{product.price}</p>
                  <p className="text-gray-500">{product.categories}</p>
                </div>
              </div>

              {/* Heart icon positioned at the bottom */}
              <div
                className="absolute bottom-10 right-6"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering navigation on click
                  handleWishlistClick(product);
                }}
              >
                <FaHeart
                  className={`text-2xl cursor-pointer ${
                    WishlistItem.some((item) => item.id === product.id)
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
