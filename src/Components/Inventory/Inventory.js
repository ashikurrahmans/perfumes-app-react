import useProducts from "./../Shared/useProducts";
import SingleProduct from "./SingleProduct";

const Inventory = () => {
  const [products, setProducts] = useProducts([]);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto">
      {products.map((item) => (
        <SingleProduct item={item} key={item._id}></SingleProduct>
      ))}
    </div>
  );
};

export default Inventory;
