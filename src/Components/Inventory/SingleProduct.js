import React from "react";

const SingleProduct = (props) => {
  const { _id, image, productName, email, supplier, quantity, price } =
    props.item;
  return (
    <div>
      <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
        <img
          class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6"
          src={`image`}
          alt="bag"
        />
        <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
          <div class="flex items-center">
            <h2 class="text-xl text-gray-800 font-medium mr-auto">
              {productName}
            </h2>
            <p class="text-gray-800 font-semibold tracking-tighter">
              only
              <i class="text-gray-600 line-through">${price}</i>
              48$
            </p>
          </div>
          <p class="text-sm text-gray-700 mt-4">{}</p>
          <div class="flex items-center justify-end mt-4 top-auto">
            <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">
              Delete
            </button>
            <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">
              Edit
            </button>
            <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
