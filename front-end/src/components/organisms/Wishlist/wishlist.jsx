import React, { useContext } from "react";
import HeaderContent from "../../page/HeaderContent/HeaderContent";
import Footer from "../../molecule/Footer/footer";
import cart from "../../../assets/Image/cart.png";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../WishlistContext/WishlistProvider";

function WishList() {
  const navigate = useNavigate();
  const { WishlistItem } = useContext(WishlistContext);

  return (
    <>
      <HeaderContent />
      {WishlistItem.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen bg-cream-50">
          <div>
            <img src={cart} alt="cart is empty" />
          </div>
          <div className="mt-8 text-center text-xl">
            Your wishlist is empty and sad :(
          </div>
          <div className="mt-2 text-center text-sm text-gray-600">
            Add something to make it happy!
          </div>
          <button
            onClick={() => navigate("/flower")}
            className="mt-8 px-6 py-2 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {WishlistItem.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-lg bg-white relative"
                onClick={() => navigate(`/productdetail/${product.id}`)}
              >
                <img
                  src={`http://127.0.0.1:8000${product.image}`}
                  alt={product.product_name}
                  className="w-full h-40 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {product.product_name}
                </h2>
                <p className="text-gray-700 overflow-auto p-2 mb-4 h-48">
                  {product.product_desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}

export default WishList;
