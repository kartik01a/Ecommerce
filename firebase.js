import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2EmEhihd0-qE4sD8r8zZg2PILqiCyqsY",
  authDomain: "xenocommerce-6dc64.firebaseapp.com",
  databaseURL: "https://xenocommerce-6dc64-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "xenocommerce-6dc64",
  storageBucket: "xenocommerce-6dc64.appspot.com",
  messagingSenderId: "279728683909",
  appId: "1:279728683909:web:91a6b55213433fa0fda2ec",
  measurementId: "G-MM29TXWR17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};