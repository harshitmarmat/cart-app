import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwg1V8Y5iEiO5SZR83a_z7DkHl2cHKYeQ",
  authDomain: "cart-web-app-cdf4f.firebaseapp.com",
  projectId: "cart-web-app-cdf4f",
  storageBucket: "cart-web-app-cdf4f.appspot.com",
  messagingSenderId: "512947187831",
  appId: "1:512947187831:web:aa3084bb15c5e81a365672"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();