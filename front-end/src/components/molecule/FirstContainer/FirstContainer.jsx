import React from "react";
import flower from "../../../assets/Image/flower.webp";

function FirstContainer() {
  return (
    <div className="flex justify-center items-center h-50% w-50%">
      <img src={flower} alt="Example" />
    </div>
  );
}

export default FirstContainer;
