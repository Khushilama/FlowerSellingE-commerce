import React from "react";
import flower from "../../../assets/Image/flower.webp";
import HeaderContent from "../HeaderContent/HeaderContent";
const AboutPage = () => {
  return (
    <HeaderContent>
      <div className="flex justify-center items-center h-50% w-50%">
        <img src={flower} alt="Example" />
      </div>
    </HeaderContent>
  );
};

export default AboutPage;
