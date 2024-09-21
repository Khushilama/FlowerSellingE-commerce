import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../templates/Header/Header";
import { IoStar } from "react-icons/io5";
import { MdOutlineInsertComment } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import BuyButton from "../../atoms/BuyButton/buybutton";
import Footer from "../../molecule/Footer/footer";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productList, setProductList] = useState(null);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("red");
  const [quantity, setQuantity] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  // Initialize data state with proper default values
  const [data, setData] = useState({
    product_id: id || "",
    color: color,
    size: size,
    coupon_code: 'None', // Set to null or remove if not needed
    shipping_price: 0,
    quantity: quantity
  });

  // Update size dynamically
  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
    setData((prevState) => ({
      ...prevState,
      size: selectedSize
    }));
  };

  // Update color dynamically
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
    setData((prevState) => ({
      ...prevState,
      color: selectedColor
    }));
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setQuantity(value);
    setData((prevState) => ({
      ...prevState,
      quantity: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    
    try {
      console.log("Data to submit:", data);

      // Remove coupon_code if it's null or empty
      const postData = {
        ...data,
        coupon_code: data.coupon_code ? data.coupon_code : undefined
      };

      const response = await axios.post("http://localhost:8000/cart/", postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('Product added to cart:', response.data);
        navigate('/cartdetails');
      } else {
        setErrorMessage('Failed to add product to the cart');
      }
    } catch (error) {
      console.error('Error adding to cart:', error.response ? error.response.data : error.message);
      setErrorMessage('An error occurred: ' + (error.response ? error.response.data : error.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fetch product details
  const getData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/productlist/${id}/`);
      setProductList(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getData(); 
  }, [id]);

  useEffect(() => {
    if (productList) {
      setData((prevState) => ({
        ...prevState,
        product_id: productList.id || id,
        shipping_price: productList.shipping_price || 0
      }));
    }
  }, [productList, id]);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={productList?.image ? `http://127.0.0.1:8000${productList.image}` : ""}
              alt="Product Image"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-bold mb-4">
              {productList?.product_name || "Loading..."}
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
                <span className="ml-2 text-gray-500">120 comments</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Select Size</p>
              <div className="flex space-x-2 mt-2">
                {productList?.size?.length > 0 ? (
                  productList.size.map((size, index) => (
                    <button
                      key={index}
                      className={`bg-gray-300 px-4 py-2 rounded-md ${size === data.size ? 'bg-blue-500 text-purple-300' : ''}`}
                      onClick={() => handleSizeChange(size)}
                    >
                      {size}
                    </button>
                  ))
                ) : (
                  <p>No size available</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Colours Available</p>
              <div className="flex space-x-4 mt-2">
                {productList?.color_available?.length > 0 ? (
                  productList.color_available.map((color, index) => (
                    <div
                      key={index}
                      className={`h-4 w-4 rounded-full cursor-pointer ${color === data.color ? 'border-4 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => handleColorChange(color)}
                    ></div>
                  ))
                ) : (
                  <p>No colors available</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <p className="font-medium">Quantity</p>
              <input
                type="number"
                value={data.quantity}
                onChange={handleQuantityChange}
                min="1"
                className="border rounded px-3 py-2 w-20"
              />
            </div>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="flex space-x-4">
              <button
                className={`bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md flex items-center ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <FiShoppingCart className="mr-2" />
                {isSubmitting ? "Adding..." : "Add to cart"}
              </button>

              <BuyButton onClick={() => alert("Buy Now")}>Buy Now</BuyButton>

              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md">
                Rs.{productList?.price || "Loading..."}
              </button>
            </div>

            <hr className="my-8" />

            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2">Description</h2>
              <p className="text-gray-600">{productList?.product_desc || "Loading..."}</p>
            </div>
{/* 
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
            </div> */}
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
