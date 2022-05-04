import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "./../../firebase.init";

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const signOutHandle = () => {
    signOut(auth);
    navigate("/");
  };

  const signInHandle = () => {
    navigate("/login");
  };

  return (
    <div>
      <section>
        <nav className="bg-black shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between">
              <div>
                <NavLink
                  to="#"
                  className="flex items-center py-4 px-2"
                  style={({ isActive }) => {
                    return {
                      display: "block",
                      margin: "1rem 0",
                      color: isActive ? "red" : "",
                    };
                  }}
                >
                  <h1 className="text-4xl font-bold">
                    Per<span className="text-white">F</span>umes
                  </h1>
                </NavLink>
              </div>
              <div className="flex">
                <div className="hidden md:flex items-center space-x-1">
                  <NavLink
                    to="/"
                    className="py-4 px-3 text-lg text-gray-500 font-bold"
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "white",
                      };
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/inventory"
                    className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "white",
                      };
                    }}
                  >
                    Inventory
                  </NavLink>
                  <NavLink
                    to="/blog"
                    className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "white",
                      };
                    }}
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "white",
                      };
                    }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className="py-4 px-3 text-lg text-gray-500 font-bold hover:text-green-500 transition duration-300"
                    style={({ isActive }) => {
                      return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "white",
                      };
                    }}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>

              {/* USER Rendering */}

              <div className="flex items-center">
                {user ? (
                  <>
                    <NavLink
                      to=""
                      className="py-4 px-3 text-lg text-white font-bold "
                    >
                      Manage Items
                    </NavLink>
                    <NavLink
                      to="/additem"
                      className="py-4 px-3 text-lg text-white font-bold"
                    >
                      Add Item
                    </NavLink>
                    <NavLink
                      to=""
                      className="py-4 px-3 text-lg text-white font-bol"
                    >
                      My items
                    </NavLink>
                    <button
                      onClick={signOutHandle}
                      type="button"
                      className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Signout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={signInHandle}
                    type="button"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    SignIn
                  </button>
                )}

                <Outlet></Outlet>
                {/* <button
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sing up
              </button> */}
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
