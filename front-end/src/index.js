import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartItemProvider } from "./context/CartItemProvider";
import { WishlistProvider } from "./components/organisms/WishlistContext/WishlistProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartItemProvider>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </CartItemProvider>
);
