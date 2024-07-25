import React, { useState, useEffect } from "react";
import HeaderContent from "../HeaderContent/HeaderContent";

const BlogPage = () => {
  const [productList, setProductList] = useState([]);

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProductList(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
  
    <>
      <HeaderContent/>
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productList.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg bg-white">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-green-500 font-bold">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
