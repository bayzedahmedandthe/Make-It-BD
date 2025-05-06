import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import {  useState } from "react";
import auth from "../../../Firebase/firebase.init";
import AuthContext from "../AuthContext";



const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    };

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInWithGoogle,
        loginUser,
        updateUser
    };

    return (

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
    );
};

export default ContextProvider;