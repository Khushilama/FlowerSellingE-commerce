import React from "react";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import DropdownMenu from "../../atoms/DropDownMenu/DropDownMenu";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      // style={{ backgroundColor: "#40826D", height: "60px", width: "100%" }}
      className="flex flex-row items-center h-16 p-8"
    >
      <div className="text-center px-10">
        <p className="text-2xl text-black font-semibold underline decoration-inherit">
          BEAUTY & BLOOMS
        </p>
      </div>

      <div className="flex flex-row list-none gap-5 items-center justify-center">
        <nav>
          <ul className="flex space-x-12">
            <li className="text-black hover:font-semibold hover:scale-110 transition transform duration-300 italic">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-black hover:font-semibold hover:scale-110 transition transform duration-300 italic">
              <Link to="/about">Gifts</Link>
            </li>
            <li className="text-black hover:font-semibold hover:scale-110 transition transform duration-300 italic">
              <Link to="/blog">Wedding</Link>
            </li>
            <li className="text-black hover:font-semibold hover:scale-110 transition transform duration-300 italic">
              <Link to="/blog">Event</Link>
            </li>
            <li className="text-black hover:font-semibold hover:scale-110 transition transform duration-300 italic">
              <Link to="/blog">Flower</Link>
            </li>
          </ul>
        </nav>
        <div className="gap-30"></div>
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="flex flex-row justify-center items-center rounded-md">
            <InputSearch />
          </div>
        </div>

        <div>
          <CiHeart />
        </div>
        <div>
          <GoPerson />
        </div>
        <div>
          <LuShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
