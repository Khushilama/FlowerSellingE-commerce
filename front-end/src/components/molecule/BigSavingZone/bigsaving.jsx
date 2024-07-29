import React from 'react';
import Image1 from '../../../assets/Image/pinnata.jpg'; 
import Image2 from '../../../assets/Image/pansy.webp'; 
import Image3 from '../../../assets/Image/dahlia.jpg'; 
import { FaArrowDownLong } from "react-icons/fa6";


const NewArrivals = () => {
  return (
    <div className="text-start">
      <h1 className="text-3xl font-normal my-8 italic pl-28">Big Save Zone</h1>
      <div className="grid grid-cols-3 pl-28 gap-4">
        <div className="relative">
          <img
            src={Image1}
            alt="New Arrival 1"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-lg font-bold">Gardenering Plants</span>
            <span className="text-lg">Dress up in summer vibe</span>
            <span className="text-lg font-bold">UPTO 50% OFF</span>
            {/* <span className="text-lg font-bold">&#x25BC;</span> Down arrow */}
            <FaArrowDownLong />   
             <button className="mt-2 px-4 py-2 bg-transparent text-white border-white rounded-lg">Shop Now</button>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image2}
            alt="New Arrival 2"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-lg font-bold">Gardenering Plants</span>
            <span className="text-lg">Dress up in summer vibe</span>
            <span className="text-lg font-bold">UPTO 50% OFF</span>
            {/* <span className="text-lg font-bold">&#x25BC;</span> Down arrow */}
            <FaArrowDownLong />
            <button className="mt-2 px-4 py-2 bg-transparent text-white border-white rounded-lg">Shop Now</button>
          </div>
        </div>
        <div className="relative">
          <img
            src={Image3}
            alt="New Arrival 3"
            className="w-96 h-96 object-cover rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 text-white space-y-2">
            <span className="text-lg font-bold">Gardenering Plants</span>
            <span className="text-lg">Dress up in summer vibe</span>
            <span className="text-lg font-bold">UPTO 50% OFF</span>
            <FaArrowDownLong className='color-black'/>
            {/* <span className="text-lg font-bold">&#x25BC;</span> Down arrow */}
            <button className="mt-2 px-4 py-2 bg-transparent text-black border-blackrounded-lg">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
