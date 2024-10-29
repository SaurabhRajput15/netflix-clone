// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQWi65QtOfJqS-l4C6y-JqMXg0z-SOFJY",
  authDomain: "netflixclone-22824.firebaseapp.com",
  projectId: "netflixclone-22824",
  storageBucket: "netflixclone-22824.appspot.com",
  messagingSenderId: "610350520316",
  appId: "1:610350520316:web:42b714cf694be0cb328479",
  measurementId: "G-FNMC9NDKH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

