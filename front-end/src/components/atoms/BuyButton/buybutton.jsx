import React from 'react';

const BuyButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[30px] w-[120px] bg-[#8A33FD] text-black font-semibold rounded transition duration-300 ${className}`}
      style={{
        fontFamily: 'ABeeZee, sans-serif',
        fontSize: '24px',
        fontStyle: 'italic',
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
