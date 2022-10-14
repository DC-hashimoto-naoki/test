// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAlT4MqhqmVbPaGeDCBwe5c9AiuCvRBe4",
    authDomain: "fir-react-2b645.firebaseapp.com",
    projectId: "fir-react-2b645",
    storageBucket: "fir-react-2b645.appspot.com",
    messagingSenderId: "220662708687",
    appId: "1:220662708687:web:40c00c4990341c46d7faba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;