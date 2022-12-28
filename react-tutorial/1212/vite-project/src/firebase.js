import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";


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
const db = getFirestore(app);


/**
 * 
 * @param {String} collections
 * @param {Object} field 
 */
async function addDataToFirestore(collections, field) {
    try {
        const docRef = await addDoc(collection(db, collections), field);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const getDataFromFirebase = async()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.dir(doc.data());
    });
}


export { addDataToFirestore, getDataFromFirebase }