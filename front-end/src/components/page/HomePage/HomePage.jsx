import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContent from "../HeaderContent/HeaderContent";
import Home from "../../../assets/Image/Home.jpg";
import Home1 from "../../../assets/Image/1.jpeg";
import Home2 from "../../../assets/Image/2.jpg";
import Pansy from "../../../assets/Image/pansy.webp";
import Pinnata from "../../../assets/Image/pinnata.jpg";
import { Carousel } from "@material-tailwind/react";
import NewArrivals from "../../molecule/NewArrivals/newarrivals";
import BigSaving from "../../molecule/BigSavingZone/bigsaving";
import ShopNowButton from "../../molecule/FirstContainer/ShopNowButton/shopNow";
import Footer from "../../molecule/Footer/footer";
import { BsChatDots } from "react-icons/bs";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import Chatbot from "../../organisms/chatbot-popupmodal/chatbot";
import { WishlistContext } from "../../organisms/WishlistContext/WishlistProvider"; // Import the WishlistContext

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [likedProductList, setLikedProductList] = useState([]);
  const [openChat, setOpenChat] = useState(false);
  const navigate = useNavigate();
  const { WishlistItem } = useContext(WishlistContext); // Accessing the liked products from context

  const handleChat = () => {
    setOpenChat(true);
  };

  const handleCloseChat = () => {
    setOpenChat(false);
  };

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

  // Filter liked products from the context
  useEffect(() => {
    const likedProducts = productList.filter((product) =>
      WishlistItem.some((item) => item.id === product.id)
    );
    setLikedProductList(likedProducts);
  }, [productList, WishlistItem]);

  const handleShopNowClick = () => {
    navigate("/flower");
  };

  const handleExploreItemsClick = () => {
    navigate("/flower");
  };

  return (
    <>
      <HeaderContent />
      <Carousel className="h-[38rem]">
        <div className="relative h-full w-full">
          <img src={Home} alt="Home Image" className="h-full w-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-20 space-y-3">
            <h1 className="text-white text-2xl font-bold">Flowers / Gifts</h1>
            <div>
              <h1 className="text-white text-[65px] font-semibold">Beauty</h1>
              <h1 className="text-white text-[65px] font-semibold">and Blooms</h1>
            </div>
            <ShopNowButton onClick={handleShopNowClick}>Shop Now</ShopNowButton>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img src={Home1} alt="Home Image" className="h-full w-full object-cover" />
        </div>
        <div className="relative h-full w-full">
          <img src={Home2} alt="Home Image" className="h-full w-full object-cover" />
        </div>
      </Carousel>

      <div className="flex justify-center mt-32 space-x-4">
        <div className="relative">
          <img src={Pansy} alt="Low Price Gifts" className="h-[356px] w-[605px] object-cover rounded-xl" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-10 gap-7 text-white">
            <span className="text-lg font-bold">Low Price</span>
            <span className="text-3xl font-bold italic">Gifts</span>
            <span className="text-sm font-bold italic underline cursor-pointer" onClick={handleExploreItemsClick}>
              Explore Items
            </span>
          </div>
        </div>
        <div className="relative">
          <img src={Pinnata} alt="Blushing Bride Bouquet" className="h-[356px] w-[605px] object-cover rounded-xl" />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-10 gap-7 text-white">
            <span className="text-lg font-bold">Beauty and Bloom Presents</span>
            <span className="text-3xl font-bold italic">Blushing Bride Bouquet</span>
            <span className="text-sm font-bold italic underline cursor-pointer" onClick={handleExploreItemsClick}>
              Explore Items
            </span>
          </div>
        </div>
      </div>

      {/* Highly Recommended Products by Influencers Section */}
      <div className="mt-32 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Most Recommended Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {likedProductList.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-lg bg-white cursor-pointer"
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
              <h2 className="text-xl font-semibold mb-2">{product.product_name}</h2>
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

      <div className="mt-32 space-x-4">
        <NewArrivals />
      </div>
      <div className="mt-32 space-x-4">
        <BigSaving />
      </div>
      <div className="mt-32 space-x-4">
        <Footer />
      </div>

      {/* Chatbot Icon at the bottom-right with text */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer" onClick={handleChat}>
        <BsChatDots size={50} className="text-purple-500" />
        <span className="mt-2 text-gray-700 text-sm">Chat with us!</span>
      </div>
      {openChat && (
        <Chatbot onClose={handleCloseChat} />
      )}
    </>
  );
};

export default HomePage;
