import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbr2GlIgG30ulDTzkpxBY0UpRWoAQ3XCk",
  authDomain: "userlogin-konsacollege.firebaseapp.com",
  projectId: "userlogin-konsacollege",
  storageBucket: "userlogin-konsacollege.appspot.com",
  messagingSenderId: "1026218655872",
  appId: "1:1026218655872:web:6557fb6f34af677fb8e665",
  measurementId: "G-PBF8CRSYT8"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider}