import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import Loading from "./../Loading/Loading";
import { toast } from "react-toastify";

const RequiredAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Email Verification

  if (!user.emailVerified) {
    <div>
      <h2 className="text-red-700">Your Email Address is not Verified!...</h2>
      <h2 className="text-red-700 ">Please Verfiy your email...</h2>
      <button
        onClick={async () => {
          await sendEmailVerification();
          toast("Sent email");
        }}
      >
        Send Verification
      </button>
    </div>;
  }

  return children;
};

export default RequiredAuth;
