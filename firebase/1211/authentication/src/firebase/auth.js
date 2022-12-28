import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCxanHHuBETbFrEGdhYyM_ZHjGd6MiqOIc",
    authDomain: "fire-loginapp-7db61.firebaseapp.com",
    projectId: "fire-loginapp-7db61",
    storageBucket: "fire-loginapp-7db61.appspot.com",
    messagingSenderId: "495556706562",
    appId: "1:495556706562:web:e0fed9eff783e7eac3821b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


async function loginUserWithEmailAndPassword(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert('maybe success');
            return user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('failed...')
            console.error(error);
        });
}

const signInWIthGoogle = ()=>{

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}


export { loginUserWithEmailAndPassword, signInWIthGoogle };