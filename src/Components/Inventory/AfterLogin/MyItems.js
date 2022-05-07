import React from "react";
import useProducts from "./../../Shared/useProducts";

const MyItems = () => {
  const [products, setProducts] = useProducts();
  return (
    <div>
      <h2>Updating My Item</h2>
    </div>
  );
};

export default MyItems;
