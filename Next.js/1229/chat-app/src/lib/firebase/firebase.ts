// Import the functions you need from the SDKs you need
import { getApps, getApp, FirebaseOptions, FirebaseApp, initializeApp } from 'firebase/app'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPsuXwN_KkM8ArVkeSJm7lPdhGmz08RBU",
    authDomain: "realtime-chat-app-ee245.firebaseapp.com",
    projectId: "realtime-chat-app-ee245",
    storageBucket: "realtime-chat-app-ee245.appspot.com",
    messagingSenderId: "898752320717",
    appId: "1:898752320717:web:d96b78c6b1604e1d534584"
};

// Initialize Firebase
export const getFirebaseApp = (): FirebaseApp => {
    return !getApps().length ? initializeApp(firebaseConfig) : getApp()
  }