import React, { useEffect, useRef } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "./../../firebase.init";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignRoute = () => {
    navigate("/login");
  };

  // Create User With Email Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const emailRefs = useRef("");
  const passwordRefs = useRef("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = emailRefs.current.value;
    const password = passwordRefs.current.value;
    createUserWithEmailAndPassword(email, password);
    toast("Please Check your email for verify!..");
  };

  console.log(user);

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  let handleError;
  if (error) {
    handleError = <p className="text-red-600">Eror: {error?.message}</p>;
  }

  return (
    <div>
      <div className="flex items-center bg-gray-50 mt-20">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2 bg-gray-700">
              <div className="m-20 pt-14">
                <h1 className="mb-4 text-2xl font-bold text-center text-white">
                  Social Login
                </h1>

                <SocialLogin></SocialLogin>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                  Sign up
                </h1>
                <form action="" onSubmit={handleSignUp}>
                  <div>
                    <label className="block text-sm">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Name"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm">Email</label>
                    <input
                      required
                      ref={emailRefs}
                      type="email"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Email Address"
                    />
                  </div>
                  <div>
                    <label className="block mt-4 text-sm">Password</label>
                    <input
                      ref={passwordRefs}
                      required
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  {handleError}
                  <button
                    className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-indigo-600 border border-transparent rounded-lg  hover:bg-indigo-700 focus:outline-none focus:shadow-outline-blue"
                    href="#"
                  >
                    Sign up
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-sm">
                    have an account?
                    <a
                      href="#"
                      className="text-blue-600 hover:underline"
                      onClick={handleSignRoute}
                    >
                      LogIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
