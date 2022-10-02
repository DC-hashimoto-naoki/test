// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvL-WdEZtXihmOmMEZ7roh4BbPqAdWeMk",
  authDomain: "newsapi-cce6f.firebaseapp.com",
  projectId: "newsapi-cce6f",
  storageBucket: "newsapi-cce6f.appspot.com",
  messagingSenderId: "836869258375",
  appId: "1:836869258375:web:4315e51195ec1957598c22",
  measurementId: "G-WTZ47SR7ES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);