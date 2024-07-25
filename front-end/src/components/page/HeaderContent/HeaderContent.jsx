import React, { Children } from "react";
import Header from "../../templates/Header/Header";
import FirstContainer from "../../molecule/FirstContainer/FirstContainer";
const HeaderContent = (props) => {
  return (
    <div className="absolute top-0 flex h-16 flex-col bg-white w-full z-10">
      <Header />
      {/* style={{height:'100%', width:'100%'}} */}
      {/*<div className=" h-60" >
        {props.children}
      </div> */}
    </div>
  );
};
export default HeaderContent;
