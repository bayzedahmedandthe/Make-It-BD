import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import {  useEffect, useState } from "react";
import auth from "../../../Firebase/firebase.init";
import AuthContext from "../AuthContext";
import useAxios from "../../../../useAxios";



const ContextProvider = ({ children }) => {
    const customAxios = useAxios()
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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser?.email};
                customAxios.post("/users", userInfo)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
            }
            setLoading(false);
        });


        return () => unSubscribe();
    }, []);

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