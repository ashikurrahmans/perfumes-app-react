import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const url = `https://perfume-wirehouse.herokuapp.com/inventory/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const quantityRef = useRef();
  const handleQuantity = (e) => {
    e.preventDefault();
    const quantity = quantityRef.current.value;
    const addingQuantity = parseInt(quantity) + parseInt(products.quantity);
  };

  const handleInventory = () => {
    navigate("/manageitem");
  };

  return (
    <div>
      <div className="min-w-screen min-h-screen bg-indigo-700 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={products.image}
                  className="w-full relative z-10 "
                  alt={products.productName}
                />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {products.productName}
                </h1>
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    Price : $
                  </span>
                  <span className="font-bold text-2xl leading-none align-baseline">
                    {products.price}
                  </span>
                </div>
                <div className="mb-4 mt-4">
                  <h1 className=" text-sm">Quantity : {products.quantity}</h1>
                  <h1 className=" text-sm ">Supplier : {products.supplier}</h1>
                </div>
                <p className="text-sm">{products.productDesc.slice(0, 250)}</p>
              </div>

              <div>
                <div className="inline-block align-bottom">
                  <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    Delivered
                  </button>
                  <input
                    required
                    ref={quantityRef}
                    type="number"
                    className="m-4 w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    placeholder="Quantity"
                  />
                  <button
                    onClick={handleQuantity}
                    className="ml-2 text-white bg-green-400 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    Add Quantity
                  </button>
                  {/* <button
                    onClick={() => DeleteProduct(products._id)}
                    className="mt-5 ml-2 bg-red-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleInventory}
            className="mt-10 focus:outline-none text-white bg-indigo-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Manage Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
