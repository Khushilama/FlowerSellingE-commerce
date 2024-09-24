import React from "react";

function GiftWrappingModal({ isOpen, onClose, options, onSelect, productPrice }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Select Gift Wrap</h2>
        <div className="space-y-4">
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
            >
              <div className="flex items-center">
                <img src={option.image} alt={option.name} className="w-16 h-16 rounded-md" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{option.name}</h3>
                  <p className="text-gray-600">Rs. {option.price}</p>
                </div>
              </div>
              <div>
              
                <button
                  onClick={() => onSelect(option)}
                  className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}

export default GiftWrappingModal;
