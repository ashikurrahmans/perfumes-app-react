import React from "react";
import Blog from "./SingleComponents/Blog";
import Hero from "./SingleComponents/Hero";
import HomeProducts from "./SingleComponents/HomeProducts";
import Newsletter from "./SingleComponents/Newsletter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleInventory = () => {
    navigate("/manageitem");
  };
  return (
    <div>
      <Hero></Hero>
      <div className="container mx-auto">
        <HomeProducts></HomeProducts>
        <div className="flex justify-center ">
          <button
            type="button"
            onClick={handleInventory}
            className="mt-10 focus:outline-none text-white bg-indigo-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Inventory
          </button>
        </div>
      </div>
      <Blog></Blog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
