import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "vrtualcourses.firebaseapp.com",
  projectId: "vrtualcourses",
  storageBucket: "vrtualcourses.firebasestorage.app",
  messagingSenderId: "288097336370",
  appId: "1:288097336370:web:bc417831deb9e56b7d102b"
};



  // apiKey: "AIzaSyAHnHCjDMA8wsSsjpdlfzfaSYvPXOPuJXk",
  // authDomain: "vrtualcourses.firebaseapp.com",
  // projectId: "vrtualcourses",
  // storageBucket: "vrtualcourses.firebasestorage.app",
  // messagingSenderId: "288097336370",
  // appId: "1:288097336370:web:bc417831deb9e56b7d102b"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}