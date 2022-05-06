import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/manageitem");
  };
  // const HandleManageInventory = () => {
  //   navigate("/manageitem");
  // };
  return (
    <div>
      <div className="w-full">
        <div className="relative bg-indigo-700  mx-auto flex flex-col items-center md:pb-34 md:pt-34 sm:pb-16 sm:pt-16">
          <img
            className="object-center w-40 mb-6"
            src="https://i.ibb.co/hRy6Qff/539518.png"
            alt="bg"
          />

          <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">
              A Perfume store <br /> with everything you need.
            </h1>
          </div>
          <div
            className="flex justify-center items-center mb-10 sm:mb-20"
            onClick={handleShop}
          >
            <button className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">
              Shop Now
            </button>
            {/* <button
              onClick={HandleManageInventory}
              className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm"
            >
              Manage Products
            </button> */}
            <div>
              <img src="https://ibb.co/7tf7bNf" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
