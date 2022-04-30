// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,

  apiKey: "AIzaSyCemOSBuCwLS7if-BBcij2FT3aU5mgRCbE",
  authDomain: "wirehouse-ee68f.firebaseapp.com",
  projectId: "wirehouse-ee68f",
  storageBucket: "wirehouse-ee68f.appspot.com",
  messagingSenderId: "694889800119",
  appId: "1:694889800119:web:589601999d390251f58832",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
