// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d9211.firebaseapp.com",
  projectId: "mern-blog-d9211",
  storageBucket: "mern-blog-d9211.appspot.com",
  messagingSenderId: "300563131046",
  appId: "1:300563131046:web:6ad7bcf17d9201873fe267",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
