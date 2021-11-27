import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

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
const actionCodeSettings = {
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);
let result;
let err;
async function data(email, password, userName){
createUserWithEmailAndPassword(auth, email, password)
  .then((user) => {
    updateProfile(auth.currentUser, {
      displayName: userName, photoURL: "https://example.com/jane-q-user/profile.jpg"
      
    })
    sendEmailVerification(auth.currentUser)

  })
  .catch((error) => {
  
  });

}


export default data
