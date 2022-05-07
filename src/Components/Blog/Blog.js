import React from "react";

const Blog = () => {
  return (
    // <div className="flex mt-10 mb-10 flex-wrap">
    //   <div className="max-w-lg mx-auto">
    //     <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    //       <a href="#">
    //         <img
    //           className="rounded-t-lg"
    //           src="https://flowbite.com/docs/images/blog/image-1.jpg"
    //           alt=""
    //         />
    //       </a>
    //       <div className="p-5">
    //         <a href="#">
    //           <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
    //             What is the Difference between javascript and nodejs?
    //           </h5>
    //         </a>
    //         <p className="font-normal text-gray-700 mb-3">
    //           Here are the biggest enterprise technology acquisitions of 2021 so
    //           far, in reverse chronological order.
    //         </p>
    //         <a
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
    //           href="#"
    //         >
    //           Read more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-lg mx-auto">
    //     <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    //       <a href="#">
    //         <img
    //           className="rounded-t-lg"
    //           src="https://flowbite.com/docs/images/blog/image-1.jpg"
    //           alt=""
    //         />
    //       </a>
    //       <div className="p-5">
    //         <a href="#">
    //           <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
    //             When should you use nodejs and when should you use mongodb?
    //           </h5>
    //         </a>
    //         <p className="font-normal text-gray-700 mb-3">
    //           Here are the biggest enterprise technology acquisitions of 2021 so
    //           far, in reverse chronological order.
    //         </p>
    //         <a
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
    //           href="#"
    //         >
    //           Read more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="max-w-lg mx-auto">
    //     <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    //       <a href="#">
    //         <img
    //           className="rounded-t-lg"
    //           src="https://flowbite.com/docs/images/blog/image-1.jpg"
    //           alt=""
    //         />
    //       </a>
    //       <div className="p-5">
    //         <a href="#">
    //           <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
    //             Differences between sql and nosql databases.
    //           </h5>
    //         </a>
    //         <p className="font-normal text-gray-700 mb-3">
    //           Here are the biggest enterprise technology acquisitions of 2021 so
    //           far, in reverse chronological order.
    //         </p>
    //         <a
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
    //           href="#"
    //         >
    //           Read more
    //         </a>
    //       </div>
    //     </div>
    //   </div>{" "}
    //   <div className="max-w-lg mx-auto">
    //     <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
    //       <a href="#">
    //         <img
    //           className="rounded-t-lg"
    //           src="https://flowbite.com/docs/images/blog/image-1.jpg"
    //           alt=""
    //         />
    //       </a>
    //       <div className="p-5">
    //         <a href="#">
    //           <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
    //             Differences between sql and nosql databases.
    //           </h5>
    //         </a>
    //         <p className="font-normal text-gray-700 mb-3">
    //           Here are the biggest enterprise technology acquisitions of 2021 so
    //           far, in reverse chronological order.
    //         </p>
    //         <a
    //           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
    //           href="#"
    //         >
    //           Read more
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  What are the core Difference between JavaScript and Node JS?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  The most fundamental yet crucial difference between JS and
                  Node JS is that JavaScript is a programming language that is
                  used to write scripts, whereas Node JS is a JavaScript runtime
                  environment that is used to develop applications. Node JS is
                  used to establish a runtime environment that allows JavaScript
                  code to be executed in a production environment (system where
                  codes are built) as well as in the application (browser or any
                  other application) where it is meant to be executed.
                  Javascript is a programming language that can only be used in
                  browsers, however we can execute Javascript outside of the
                  browser with the help of NodeJS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  When should you use nodejs and when should you use mongodb?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  Node JS and MongoDB are two distinct technologies with
                  distinct goals. We use Node JS to establish a runtime
                  environment in which we can write scripting languages like
                  JavaScript in the editor while also connecting the browser and
                  development environment together. MongoDB, on the other hand,
                  is a data storage database. MongoDB is a great solution for
                  people who like to store data in an unstructured format. W hen
                  developers just need to store data in JSON format, MongoDB is
                  a suitable choice since it is simple to administrate and easy
                  setup process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  What are the Differences between sql and nosql databases?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  In terms of data storing system, SQL and NoSQL databases are
                  virtually diametrically opposed. SQL databases are used to
                  store data in a tabular manner that is structured. NoSQL
                  databases, on the other hand, utilized to store data in an
                  unstructured manner. Node JS, for example, is a NoSQL database
                  since it stores data in an unstructured format. SQL databases
                  are ideal for multi-row transactions, although NoSQL is better
                  for JSON. NoSQL databases scale horizontally rather than
                  vertically, as SQL databases do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-4/5	mt-10 mx-auto">
        <div className="accordion" id="accordionExample ">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
              accordion-button
              relative
              flex
              items-center
              w-full
              py-4
              px-5
              text-base text-gray-800 text-left
              bg-white
              border-0
              rounded-none
              transition
              focus:outline-none
              
            "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>
                  What is the purpose of jwt and how does it work?
                </strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  JWT (JSON Web Token) is used to authenticate the correct
                  request and prevent unauthorized data access. In simpler
                  words, the JWT procedure is divided into two parts: client and
                  server. Client-side JWT is provided by the server, and
                  server-side JWT is built using a secret key that is kept
                  hidden. To ensure that claims cannot be modified after the
                  token has been delivered, JWTs are signed using a
                  cryptographic mechanism. When a user signs in for the first
                  time, even if they reload their protected page, each time
                  token is confirmed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
