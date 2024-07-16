import React, { Children } from "react";
import Header from "../../templates/Header/Header";
import FirstContainer from "../../molecule/FirstContainer/FirstContainer";
const HeaderContent = (props) => {
  return (
    <div className="h-screen flex flex-col bg-white">
      <Header />
      {/* style={{height:'100%', width:'100%'}} */}
      <div className=" h-60" >
        {props.children}
      </div>
    </div>
  );
};
export default HeaderContent;
