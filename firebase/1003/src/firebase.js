// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQe4nOLhWdaeuST_g6d2cWRJr5QzT8f7E",
    authDomain: "fir-login-1ab8b.firebaseapp.com",
    projectId: "fir-login-1ab8b",
    storageBucket: "fir-login-1ab8b.appspot.com",
    messagingSenderId: "552217129265",
    appId: "1:552217129265:web:9a1d50aed829e172650010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider};