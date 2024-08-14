import React from 'react';
import Image1 from '../../../assets/Image/pinnata.jpg'; 
import Image2 from '../../../assets/Image/pansy.webp'; 
import Image3 from '../../../assets/Image/2.jpg'; 
import Image4 from '../../../assets/Image/1.jpeg'; 

const NewArrivals = () => {
  return (
    <div className="text-start gap-5">
      <h1 className="text-3xl font-normal my-8 italic pl-28">New Arrivals</h1>
      <div className="flex  pl-16 justify-around ">
        <div>
        <img
          src={Image1}
          alt="New Arrival 1"
          className="w-64 h-64 object-cover rounded-xl"
        />
        </div>
        <div>
        <img
          src={Image2}
          alt="New Arrival 2"
          className="w-64 h-64 object-cover rounded-xl"
        />
        </div>
        <div>
        <img
          src={Image3}
          alt="New Arrival 3"
          className="w-64 h-64 object-cover rounded-xl"
        />
        </div>
        <div>
        <img
          src={Image4}
          alt="New Arrival 4"
          className="w-64 h-64 object-cover rounded-xl"
        />
        </div>
      </div>

    </div>
  );
};

export default NewArrivals;
