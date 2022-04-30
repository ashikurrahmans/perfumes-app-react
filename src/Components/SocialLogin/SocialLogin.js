import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbuser] = useSignInWithFacebook(auth);
  if (user || fbuser) {
    navigate("/");
  }

  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="w-80 h-12 rounded-lg bg-red-600 text-gray-200 uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4"
      >
        Sign with Google
      </button>
      <button
        onClick={() => signInWithFacebook()}
        className="w-80 h-12 rounded-lg bg-blue-600 text-gray-200 uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4"
      >
        Sign with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
