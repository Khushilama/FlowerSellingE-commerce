import { createContext, useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [WishlistItem, setWishlistItem] = useState([]);
  return (
    <WishlistContext.Provider value={{ WishlistItem, setWishlistItem}}>
      {children}
    </WishlistContext.Provider>
  );
};
