import React, { useState } from "react";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate import
import { FaBars, FaSignOutAlt } from "react-icons/fa"; // Import missing icons

const Header = () => {
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
    setIsSidebarOpen(false); // Close the sidebar
    navigate("/"); // Navigate to homepage
  };

  return (
    <div className="w-full flex flex-row items-center outline-gray-90000 outline- fixed bg-white h-16 p-8">
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

          <div>
            <Link to="/cart">
              <LuShoppingCart size={24} />
            </Link>
          </div>

          {/* Menu Icon */}
          <div className="flex items-center cursor-pointer" onClick={toggleSidebar}>
            <FaBars size={24} />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-pink-200 p-5 transition-transform duration-300 ease-in-out z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="mb-6">
            <p className="text-xl font-bold">Setting</p>
          </div>
          <ul className="space-y-6">
            <li className="flex items-center space-x-3 cursor-pointer" onClick={handleLogout}>
              <FaSignOutAlt size={20} />
              <span className="text-black">Logout</span>
            </li>
          </ul>
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
