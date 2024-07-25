import React, { useState } from "react";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);

  const handleClick = (path) => {
    setSelected(path);
  };

  return (
    <div className="w-full flex flex-row items-center outline-gray-90000 outline- fixed bg-white	 h-16 p-8">
      <div className="text-center px-10">
        <p className="text-2xl text-black font-semibold underline decoration-inherit">
          BEAUTY & BLOOMS
        </p>
      </div>

      <div className="flex flex-row list-none gap-5 items-center justify-center">
        <nav>
          <ul className="flex space-x-12">
            <li
              className={`text-black italic ${
                selected === "/home" ? "font-bold" : ""
              }`}
            >
              <Link to="/home" onClick={() => handleClick("/home")}>
                Home
              </Link>
            </li>
            <li
              className={`text-black italic ${
                selected === "/about" ? "font-bold" : ""
              }`}
            >
              <Link to="/about" onClick={() => handleClick("/about")}>
                Gifts
              </Link>
            </li>
            <li
              className={`text-black italic ${
                selected === "/blog" ? "font-bold" : ""
              }`}
            >
              <Link to="/blog" onClick={() => handleClick("/blog")}>
                Wedding
              </Link>
            </li>
            <li
              className={`text-black italic ${
                selected === "/event" ? "font-bold" : ""
              }`}
            >
              <Link to="/event" onClick={() => handleClick("/event")}>
                Event
              </Link>
            </li>
            <li
              className={`text-black italic ${
                selected === "/flower" ? "font-bold" : ""
              }`}
            >
              <Link to="/flower" onClick={() => handleClick("/flower")}>
                Flower
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center items-center ml-40 gap-10">
          <div className="flex flex-row justify-center items-center rounded-md">
            <InputSearch />
          </div>

          <div>
            <CiHeart size={24} />
          </div>
          <div>
            <GoPerson size={24} />
          </div>
          <div>
            <LuShoppingCart size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
