import React from "react";
import Title from "../Shared/Title";

const About = () => {
  return (
    <div>
      <Title title={"About"}></Title>

      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                RALPH LAUREN FOURTH QUARTER AND FULL YEAR FISCAL{" "}
              </h2>
              <p className="mt-6 text-gray-600">
                We are a global leader in the design, marketing and distribution
                of premium lifestyle products. For more than 50 years, our
                reputation and iconic image has been consistently developed
                across an expanding number of products, brands, and markets
                around the world. Our enduring purpose, that guides everything
                we do, is to inspire the dream of a better life through
                authenticity and timeless style.
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Ralph Lauren Corporation (NYSE:RL) is a global leader in the
                design, marketing and distribution of premium lifestyle products
                in five categories: apparel, footwear & accessories, home,
                fragrances and hospitality. For more than 50 years, Ralph Lauren
                has sought to inspire the dream of a better life through
                authenticity and timeless style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
