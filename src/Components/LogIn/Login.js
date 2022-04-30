import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "./../../firebase.init";
// ToastiFy for notification
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const emailrefs = useRef("");
  const passwordrefs = useRef("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const LoginSubmit = (e) => {
    e.preventDefault();
    const email = emailrefs.current.value;
    const password = passwordrefs.current.value;
    signInWithEmailAndPassword(email, password);
    toast("Login SuccessFull!..");
  };

  const handleSignUP = () => {
    navigate("/signup");
  };

  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  // auth.signin(username, () => {
  //   navigate(from, { replace: true });
  // });

  return (
    <>
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
                  Login
                </h1>
                <form
                  className="mt-8 space-y-6"
                  action="#"
                  method="POST"
                  onSubmit={LoginSubmit}
                >
                  <input type="hidden" name="remember" defaultValue="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div className="mb-8">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        ref={emailrefs}
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        ref={passwordrefs}
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        {/* <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  /> */}
                      </span>
                      Sign in
                    </button>
                  </div>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-sm">
                    You don't have any account yet?
                    <a
                      href="#"
                      className="text-blue-600 hover:underline"
                      onClick={handleSignUP}
                    >
                      {" "}
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};

export default Login;
