import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
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

const HomePage = () => {
  const navigate = useNavigate(); 

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
          <img
            src={Home}
            alt="image 1"
            className="h-full w-full object-cover"
          />
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
          <img
            src={Home1}
            alt="image 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative h-full w-full">
          <img
            src={Home2}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </div>
      </Carousel>
      <div className="flex justify-center mt-32 space-x-4">
        <div className="relative">
          <img
            src={Pansy}
            alt="additional image"
            className="h-[356px] w-[605px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-10 gap-7 text-white">
            <span className="text-lg font-bold">Low Price</span>
            <span className="text-3xl font-bold italic">Gifts</span>
            
            <span
              className="text-sm font-bold italic underline cursor-pointer"
              onClick={handleExploreItemsClick} // Add click handler
            >
              Explore Items
            </span>
          </div>
        </div>
        <div className="relative">
          <img
            src={Pinnata}
            alt="additional image"
            className="h-[356px] w-[605px] object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-10 gap-7 text-white">
            <span className="text-lg font-bold">Beauty and Bloom Presents</span>
            <span className="text-3xl font-bold italic">Blushing Bride Bouquet</span>
         
            <span
              className="text-sm font-bold italic underline cursor-pointer"
              onClick={handleExploreItemsClick} // Add click handler
            >
              Explore Items
            </span>
          </div>
        </div>
      </div>
      <div className="mt-32 space-x-4">
        <NewArrivals />
      </div>
      <div className="mt-32 space-x-4">
        <BigSaving/>
      </div>
      <div className="mt-32 space-x-4">
      <Footer/>
      </div>
    </>
  );
};

export default HomePage;
