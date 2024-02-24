// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA5Z-FU_6wbpN7QlN4Cj2vY7nWy2R9-Vvo",
  authDomain: "netflixgpt-a5de3.firebaseapp.com",
  projectId: "netflixgpt-a5de3",
  storageBucket: "netflixgpt-a5de3.appspot.com",
  messagingSenderId: "171531151261",
  appId: "1:171531151261:web:5e346533ff0ab58dd77174",
  measurementId: "G-C2EY1LM35H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();