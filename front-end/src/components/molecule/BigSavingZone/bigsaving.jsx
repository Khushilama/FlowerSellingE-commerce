import React from 'react';
import Image1 from '../../../assets/Image/pinnata.jpg'; 
import Image2 from '../../../assets/Image/pansy.webp'; 
import Image3 from '../../../assets/Image/dahlia.jpg'; 
import { FaArrowDownLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const BigSaving = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleShopNowClick = () => {
    navigate("/flower"); // Navigate to /flower when the button is clicked
  };

  const handleExploreItemsClick = () => {
    navigate("/flower"); // Navigate to /flower when the span is clicked
  };

  return (
    <div className="text-start">
      <h1 className="text-3xl font-normal my-8 italic pl-28">Big Save Zone</h1>
      <div className="grid grid-cols-3 pl-28 gap-2"> {/* Changed gap-4 to gap-2 */}
        <div className="relative">
          <img
            src={Image1}
            alt="New Arrival 1"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-3xl font-400 italic">Gardening</span>
            <span className="text-3xl font-400 italic">Plants</span>
            <span className="text-sm italic font-ABeeZee">Bloom with us</span>
            <FaArrowDownLong className='self-auto' />   
            <button 
              className="mt-2 px-4 py-2 bg-transparent text-white border border-white rounded-lg" 
              onClick={handleShopNowClick} // Attach the click handler here
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image2}
            alt="New Arrival 2"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-3xl font-400 italic">Gardening</span>
            <span className="text-3xl font-400 italic">Plants</span>
            <span className="text-sm italic font-ABeeZee">Flowers for Every Feeling</span>
            <FaArrowDownLong className='self-auto' />
            <button 
              className="mt-2 px-4 py-2 bg-transparent text-white border border-white rounded-lg" 
              onClick={handleExploreItemsClick} // Attach the click handler here
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image3}
            alt="New Arrival 3"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-3xl font-400 italic">Gardening</span>
            <span className="text-3xl font-400 italic">Plants</span>
            <span className="text-sm italic font-ABeeZee">Where Every Petal Tells a Story</span>
            <FaArrowDownLong className='self-auto' />
            <button 
              className="mt-2 px-4 py-2 bg-transparent text-white border border-white rounded-lg" 
              onClick={handleExploreItemsClick} // Attach the click handler here
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigSaving;
