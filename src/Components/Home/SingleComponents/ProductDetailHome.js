import React from "react";
import { useNavigate } from "react-router-dom";

const ProductDetailsHome = (props) => {
  const { _id, image, productName, supplier, quantity, price } = props.item;
  const navigate = useNavigate();

  const handleSingleProduct = (id) => {
    navigate(`/inventory/${id}`);
  };

  return (
    <div className="bg-gray-100 mt-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 col ">
        <div>
          <img
            className=" w-full h-full inset-0 object-cover rounded-lg"
            src={image}
            alt={productName}
          />
        </div>
        <div className="px-4 py-4 rounded-lg ">
          <h2 className="text-xl text-gray-800 font-medium">{productName}</h2>
          <div className="mt-6">
            <h2 className="text-sm  text-gray-800 font-medium">
              Price : ${price}
            </h2>
            <h2 className="text-sm text-gray-800 font-medium">
              Quantity : {quantity}
            </h2>
            <h2 className="text-sm text-gray-800 font-medium">
              Supplier : {supplier}
            </h2>
          </div>

          <div className="flex mt-4 p-5">
            {/* <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
              Edit
            </button> */}

            <button
              className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md "
              onClick={() => handleSingleProduct(_id)}
            >
              Update Quantity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHome;
