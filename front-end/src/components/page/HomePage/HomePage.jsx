import React from "react";
import HeaderContent from "../HeaderContent/HeaderContent";
import Home from "../../../assets/Image/Home.jpg";
import { Carousel } from "@material-tailwind/react";

const HomePage = () => {
  console.log(Home); // Check if the image path is correct in the console

  return (
    <HeaderContent>
      <Carousel className=" h-[38rem]">
        <img src={Home} alt="image 1" className="h-full w-full object-cover" />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      {/* You can add some content here to check if the div is rendering correctly */}
      <h1>Hi hello </h1>
    </HeaderContent>
  );
};

export default HomePage;
