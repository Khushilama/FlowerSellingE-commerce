import React, { useState, useEffect } from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import axios from "axios";
import Footer from "../../molecule/Footer/footer";
import BuyButton from "../../atoms/BuyButton/buybutton";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const FlowerPage = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/productlist/flowers/"
      );
      setProductList(response.data); // Adjust this if needed based on API response
    } catch (error) {
      console.error("Error fetching product list:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderContent />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg bg-white "
              onClick={() => navigate(`/productdetail/${product.id}`)}
            >
              <div >
              <img
                src={`http://127.0.0.1:8000${product.image}`} // Adjust the URL based on how your server serves media files
                alt={product.product_name}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              </div>
              {/* <div className="absolute top-5 right-5"> <FiShoppingCart size={24} color="white"/></div> */}
              <div className="absolute bg-white top-5 right-8"> <CiHeart size={24} color="black" /></div>

              <h2 className="text-xl font-semibold mb-2 ml-5">
                {product.product_name}
              </h2>
              <p className="text-gray-700 overflow-auto p-2 mb-4 h-48 ">
                {product.product_desc}
              </p>
              <div className="flex justify-between ">
                <div className="text-center">
                  <p className="text-green-500 font-bold">${product.price}</p>
                  <p className="text-gray-500">{product.categories}</p>
                </div>
                {/* <div>
                  <BuyButton children={"Buy Now"} />
                </div> */}
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

export default FlowerPage;
