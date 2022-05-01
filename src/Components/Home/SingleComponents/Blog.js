import React from "react";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold py-10">Our Recent Blogs</h2>
      <section className="text-gray-600 body-font my-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://i.ibb.co/JdYdzpk/pexels-valeriia-miller-3910071.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Britney Spears
                  </h1>
                  <p className="leading-relaxed mb-3">
                    With the success of her first 2004 fragrance “Curious”,
                    Britney’s perfume line extends through to 2016.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-violate bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://i.ibb.co/ZMC0p1z/pexels-mareefe-932577.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Carolina Herrera
                  </h1>
                  <p className="leading-relaxed mb-3">
                    British designer Jasper Conran has over 30 years of
                    experience with his brand, during which he has diversified.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full rounded-xl shadow-cla-pink bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                  src="https://i.ibb.co/0y7PQV7/pexels-valeria-boltneva-965989.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                    Coty L'Alimant
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Coty is a world leader in beauty with a unique portfolio of
                    brands including luxury fragrances, cosmetics and skin care.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
