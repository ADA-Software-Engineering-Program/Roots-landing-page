import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3svvU-w9wSb4kiFalIJr4n79_TTlDNIU",
  authDomain: "roots-2dec0.firebaseapp.com",
  projectId: "roots-2dec0",
  storageBucket: "roots-2dec0.appspot.com",
  messagingSenderId: "984618752053",
  appId: "1:984618752053:web:e6e9b4749cfad02033b97c",
  measurementId: "G-0W7W65T8C0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider ();
