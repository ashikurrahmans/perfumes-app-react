import useProducts from "./../Shared/useProducts";
import SingleProduct from "./SingleProduct";

const Inventory = () => {
  const [products, setProducts] = useProducts([]);

  return (
    <div>
      {products.map((item) => {
        <SingleProduct item={item} key={item._id}></SingleProduct>;
      })}
    </div>
  );
};

export default Inventory;
