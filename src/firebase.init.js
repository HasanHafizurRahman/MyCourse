// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFPBNZgSeYoYYrVcVVG24fbNqfDlCEiTI",
  authDomain: "my-course-3bd42.firebaseapp.com",
  projectId: "my-course-3bd42",
  storageBucket: "my-course-3bd42.appspot.com",
  messagingSenderId: "458561581450",
  appId: "1:458561581450:web:438aa7fdd7e124e21a5873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;