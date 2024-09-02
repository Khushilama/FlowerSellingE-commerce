import React from 'react';

const BuyButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[120px] bg-purple-500 hover:bg-purple-600p-1 text-white font-normal rounded-md transition duration-300 ${className}`}
      style={{
        fontFamily: 'ABeeZee, sans-serif',
        fontSize: '20px',
        fontWeight: '400',
        lineHeight: '28.37px',
        textAlign: 'center',
      }}
    >
      {children}
    </button>
  );
};

export default BuyButton;
