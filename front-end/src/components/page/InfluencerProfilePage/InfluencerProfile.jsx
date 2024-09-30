import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../templates/Header/Header";
import axios from "axios";
import { WishlistContext } from "../../organisms/WishlistContext/WishlistProvider";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";

const InfluencerProfile = () => {
  const [productList, setProductList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { WishlistItem } = useContext(WishlistContext);

  // Get the username and profilePicture from location state or set defaults
  const username = location.state?.username || "Influencer";
  const profilePicture = location.state?.profilePicture;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/productlist/flowers/");
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching product list:", error);
      }
    };
    getData();
  }, []);

  // Filter to show only liked products
  const likedProducts = productList.filter((product) =>
    WishlistItem.some((item) => item.id === product.id)
  );

  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>

      <div className="bg-cream p-8">
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
            <div className="rounded-full w-16 h-16 mr-4 flex items-center justify-center bg-gray-200">
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover rounded-full" />
              ) : (
                <AiOutlineUser size={48} className="text-gray-500" />
              )}
            </div>
            <div>
              <h2 className="text-2xl font-bold">{username}</h2>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-700">
            "Discover a vibrant selection of exquisite flowers that bring joy and beauty to every occasion."
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Liked Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {likedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-lg bg-white"
                onClick={() => navigate(`/productdetail/${product.id}`)}
              >
                <div>
                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
                    alt={product.product_name}
                    className="w-full h-40 object-cover rounded-t-lg mb-4"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  {product.product_name}
                </h2>
                <p className="text-gray-700 mb-4">{product.product_desc}</p>
                <p className="text-green-500 font-bold">Rs.{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerProfile;
