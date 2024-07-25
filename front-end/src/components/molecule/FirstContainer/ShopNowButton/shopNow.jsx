import React from 'react';

const ShopNowButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`h-[60px] w-[257px] bg-white text-black font-semibold rounded transition duration-300 ${className}`}
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

export default ShopNowButton;
