import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../Redux/slices/authSlice";

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
export const db = getFirestore(app);
export const storage = getStorage(app);

export const subscribeToAuthEvents = (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(uid);
      dispatch(SET_ACTIVE_USER(user));
      // ...
    } else {
      dispatch(REMOVE_ACTIVE_USER());
      // User is signed out
      // ...
    }
  });
};

// so we need to get the user details upon sign up.
export const createUserProfile = async (userDetails) => {
  try {
    await setDoc(doc(db, "users", userDetails.uid), {
      ...userDetails,
    });
    console.log("user created successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export const isSignedIn = () => {
  const user = auth.currentUser;
  if (user) {
    console.log("user is signed in");
    return true;
  } else {
    console.log("No user is signed in");
    return false;
  }
};

export const userSignOut = async () => {
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.");
      return error.message;
    });
};

export default app;

