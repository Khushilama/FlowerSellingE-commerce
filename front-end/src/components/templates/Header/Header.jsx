import React, { useState } from "react";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartItemProvider";
import { FaBars, FaSignOutAlt, FaBox } from "react-icons/fa";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
const Header = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  console.log(cartItem);
  console.log(cartItem.length);

  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const [selected, setSelected] = useState(location.pathname);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Use correct state setter

  const handleClick = (path) => {
    setSelected(path);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Corrected the state setter
  };

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsSidebarOpen(false); // Close the sidebar
    navigate("/login"); // Navigate to homepage
  };
  const MyOrders = () => {
    setIsSidebarOpen(false); // Close the sidebar
    navigate("/order"); // Navigate to homepage
  };

  return (
    <div className="w-full flex flex-row items-center fixed bg-white h-16 p-8">
      {/* Add a specific width or use flex-grow to avoid shifting */}
      <div className="text-center px-10 flex-grow">
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
                Video
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
                selected === "/flower" ? "font-bold" : ""
              }`}
            >
              <Link to="/flower" onClick={() => handleClick("/flower")}>
                Flower
              </Link>
            </li>
            <li
              className={`text-black italic ${
                selected === "/contact" ? "font-bold" : ""
              }`}
            >
              <Link to="/contact" onClick={() => handleClick("/contact")}>
                Influencer
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-row justify-center items-center ml-40 gap-10">
          <div className="flex flex-row justify-center items-center rounded-md">
            <InputSearch />
          </div>

          <div>
            <Link to="/wishlist">
              <CiHeart size={24} />
            </Link>
          </div>

          <div className="mb-4">
            <Link to="/cartdetails">
              <span className=" ml-4  border-2 ">{cartItem.length}</span>
              <LuShoppingCart size={24} />
            </Link>
          </div>

          {/* Menu Icon */}
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white p-5 transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-xl font-bold">Setting</p>
          </div>
          <ul className="space-y-6 ">
            <li className="flex items-center space-x-3 cursor-pointer">
              <CgProfile size={20} />
              <span className="text-black">Profile</span>
            </li>
          </ul>
          <ul className="space-y-6 mt-2">
            <li className="flex items-center space-x-3 cursor-pointer">
              <FaSignOutAlt size={20} />
              <button onClick={handleLogout} className="text-black">
                Logout
              </button>
            </li>
          </ul>
          {/* <ul className="space-y-6 mt-3">
            <li className="flex items-center space-x-3" onClick={MyOrders}>
              <FaBox size={20} /> 
              <span className="text-black">Order</span>
            </li>
          </ul> */}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Header;
