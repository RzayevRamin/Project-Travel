import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxl9UnF0F5wsVWChBvrC6hUmXX44YViXA",
  authDomain: "project-travel-ra90.firebaseapp.com",
  projectId: "project-travel-ra90",
  storageBucket: "project-travel-ra90.firebasestorage.app",
  messagingSenderId: "622711513555",
  appId: "1:622711513555:web:71f849d8fe36687a7e0f26",
  measurementId: "G-Z5YCY0EEED"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider('apple.com');

export { auth, googleProvider, facebookProvider, appleProvider };