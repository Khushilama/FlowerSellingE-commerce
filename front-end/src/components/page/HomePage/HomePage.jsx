import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
// import flowerImage from '../assets/flower.jpg'; // Import the flower image

const HomePage = () => {
  return (
    <HeaderContent>
      <div className="relative text-center text-white">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Beautiful Garden</h1>
          <p className="text-2xl">Experience the serenity and beauty of nature.</p>
        </div>
        <img src="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg" alt="Beautiful Flower" className="w-full h-[43rem] opacity-80" />
      </div>
    </HeaderContent>
  );
};

export default HomePage;
