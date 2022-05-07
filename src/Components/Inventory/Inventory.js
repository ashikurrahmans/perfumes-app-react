import useProducts from "./../Shared/useProducts";
import ProductDetails from "./ProductDetails";

const Inventory = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 max-w-7xl mx-auto">
      {products.map((item) => (
        <ProductDetails item={item} key={item._id}></ProductDetails>
      ))}
    </div>
  );
};

export default Inventory;
