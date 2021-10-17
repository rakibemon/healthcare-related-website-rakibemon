import {getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged, signOut} from 'firebase/auth';
import { useEffect, useState } from 'react';
import FirebaseInitialize from '../firebase/firebase.config';
FirebaseInitialize();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () =>{
    // Store Logged in user here
    const [user,setUser] = useState({});
    //Store Error here
    const [error,setError] = useState({});
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth;
    // Handle Google Sign in
    const signInUsingGoogle = () =>{
        setIsLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    };
    // Cheched Logged User information
    useEffect(()=>{
        setIsLoading(true)
        const unsubscribed = onAuthStateChanged (auth, loggedUser=>{
            if(loggedUser){
                setUser(loggedUser)
            }
            else{
                setUser({})
            }
        });
        setIsLoading(false)
        return ()=> unsubscribed;
    },[auth]);

    const logOut = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut

    }

};
export default useFirebase;