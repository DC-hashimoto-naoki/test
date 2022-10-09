import { signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, provider } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    const [user] = useAuthState(auth);
    const [userData, setUserData] = useState(null)

    return (
        <div>
        {user ? (
            <>
                <UserInfo/>
                <SignOutButton/>
            </>
        ) : (
            <SignInButton/>
        )}
        </div>
    )
}

export default Home

function SignInButton() {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>google signIN</p>
        </button>
    )
}

function SignOutButton() {
    return (
        <button onClick={ () => {auth.signOut()}}>
            <p>google signOUT</p>
        </button>
    )
}

function UserInfo() {
    return (
        <>user Info</>
    );
}