import { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Define the CartItemProvider component
export const CartItemProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children} {/* Render the children components */}
    </CartContext.Provider>
  );
};
