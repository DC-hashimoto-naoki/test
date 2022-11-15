// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd2yELxhwRpU6LCsKLKj_cArh-5_kQYEY",
  authDomain: "banner-smash.firebaseapp.com",
  projectId: "banner-smash",
  storageBucket: "banner-smash.appspot.com",
  messagingSenderId: "32978981744",
  appId: "1:32978981744:web:2275cfa9357166eabb35b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;