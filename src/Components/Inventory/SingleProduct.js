import React from "react";

const SingleProduct = (props) => {
  const { image, productName, supplier, quantity, price } = props.item;

  return (
    // <div>
    //   <div className="md:flex shadow-lg md:mx-auto my-5 max-w-lg md:max-w-2xl h-64">
    //     <img
    //       className="h-full w-full md:w-36 object-cover rounded-lg rounded-r-none pb-5/6"
    //       src={image}
    //       alt="bag"
    //     />
    //     <div className="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
    //       <div className="flex items-center">
    //         <h2 className="text-xl text-gray-800 font-medium mr-auto">
    //           {productName}
    //         </h2>
    //       </div>
    //       <p className="text-gray-800 font-semibold tracking-tighter mt-4">
    //         Price : ${price}
    //       </p>
    //       <p className="text-gray-800 font-semibold tracking-tighter mt-4">
    //         Quantity : {quantity}
    //       </p>

    //       <p className="text-gray-800 font-semibold tracking-tighter mt-4">
    //         Suplier : {supplier}
    //       </p>

    //       <div className="flex items-center justify-end mt-4 top-auto">
    //         <button className="bg-red-600 text-white px-4 py-2 rounded mr-auto hover:underline">
    //           Delete
    //         </button>
    //         <button className=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
    //           Edit
    //         </button>
    //         <button className=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
    //           Publish
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="flex bg-gray-200 ">
        <div>
          <img
            className="w-2/3 h-full object-cover rounded-lg rounded-r-none"
            src={image}
            alt={productName}
          />
        </div>
        <div className="px-4 py-4 rounded-lg">
          <h2 className="text-xl text-gray-800 font-medium">{productName}</h2>
          <h2 className="text-lg text-gray-800 font-medium">
            Quantity : {quantity}
          </h2>
          <h2 className="text-lg text-gray-800 font-medium">
            Quantity : {quantity}
          </h2>
          <h2 className="text-lg text-gray-800 font-medium">
            Quantity : {quantity}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
