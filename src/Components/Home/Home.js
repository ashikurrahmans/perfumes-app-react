import React from "react";
import Blog from "./SingleComponents/Blog";
import Hero from "./SingleComponents/Hero";
import Newsletter from "./SingleComponents/Newsletter";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Blog></Blog>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
