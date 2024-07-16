import React, { useState } from "react";

function FlowerDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleItemClick = (item) => {
    console.log("Clicked item:", item);
    // You can add logic here to handle the clicked item
    toggleMenu(); // Close the menu after item click
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="px-4 py-2 bg-green-500 text-white rounded focus:outline-none"
      >
        Shop Flowers
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg">
          <ul>
            <MenuItem onClick={() => handleItemClick("Roses")} text="Roses" />
            <MenuItem onClick={() => handleItemClick("Lilies")} text="Lilies" />
            <MenuItem onClick={() => handleItemClick("Tulips")} text="Tulips" />
          </ul>
        </div>
      )}
    </div>
  );
}

function MenuItem({ onClick, text }) {
  return (
    <li
      onClick={onClick}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {text}
    </li>
  );
}

export default FlowerDropdownMenu;
