import React, { createContext, useEffect, useState } from "react";
import app from "./firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthconText = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  // set user
  const [user, setUser] = useState(null);
  // set loading
  const [loading, setLoading] = useState(true);

  // creat user
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signInUser
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // signOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // onauth State Change
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
      setLoading(false);
      console.log(crueentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);

  // user data
  const userData = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthconText.Provider value={userData}>{children}</AuthconText.Provider>
  );
};

export default FirebaseAuthProvider;
