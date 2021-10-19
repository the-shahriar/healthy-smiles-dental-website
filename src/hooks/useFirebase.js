import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Firebase/firebase.init";

initializeFirebaseApp();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // ----------create account using email and password------------

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });
    }


    const updateUserProfile = (userImage) => {
        updateProfile(auth.currentUser, {
            photoURL: { userImage }
        })
            .then(() => {

            })
    }


    const logInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    const handleResetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    return {
        user,
        setUser,
        isLoading,
        createUserWithEmail,
        logInWithEmail,
        googleSignIn,
        logOut,
        error,
        updateUserProfile
    }

}

export default useFirebase;