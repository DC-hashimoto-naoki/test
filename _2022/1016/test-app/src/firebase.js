// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9DIgksrRSMTwObK-cS4n18qnjMkXvtAU",
    authDomain: "counter-dc4c5.firebaseapp.com",
    projectId: "counter-dc4c5",
    storageBucket: "counter-dc4c5.appspot.com",
    messagingSenderId: "885569638522",
    appId: "1:885569638522:web:70594cc5c82b1169b36bc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {database, db};