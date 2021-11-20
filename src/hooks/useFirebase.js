import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import FirebaseInitialize from '../firebase/firebase.init';
FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const useFirebase = () => {
    // Store Logged in user here
    const [user, setUser] = useState({});
    //Store Error here
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    // Handle Google Sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    };
    // Handle Fb Sign in
    const signInUsingFb = () => {
        setIsLoading(true)
        return signInWithPopup(auth, fbProvider)
    };
    //Handle Email Sign in
    const signInUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //Sign in using Email Pass
    const handleLoginUsingEmail = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Cheched Logged User information
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                setUser(loggedUser)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);
    //SignOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };
    const updateUserProfile = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(() => {
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        signInUsingGoogle,
        signInUsingFb,
        signInUsingEmail,
        handleLoginUsingEmail,
        updateUserProfile,
        logOut

    }

};
export default useFirebase;