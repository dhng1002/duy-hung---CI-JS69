// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Vx_Q9me_Z9CsmE7MOAlWP_kBzp30kcw",
  authDomain: "extreme-signal-331220.firebaseapp.com",
  databaseURL: "https://extreme-signal-331220-default-rtdb.firebaseio.com",
  projectId: "extreme-signal-331220",
  storageBucket: "extreme-signal-331220.appspot.com",
  messagingSenderId: "640039178960",
  appId: "1:640039178960:web:2b81c108f1c188bd3944d5",
  measurementId: "G-WGP4WPS34W"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
getAnalytics(firebase)

console.log(firebase)
