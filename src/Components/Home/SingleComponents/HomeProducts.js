import React from "react";
import useProducts from "../../Shared/useProducts";
import ProductDetailsHome from "./ProductDetailHome";

const HomeProducts = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-4xl font-bold py-10">
        Recent Trending Products
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto">
        {products?.slice(0, 6).map((item) => (
          <ProductDetailsHome item={item} key={item._id}></ProductDetailsHome>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
