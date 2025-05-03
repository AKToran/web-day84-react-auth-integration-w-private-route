import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signoutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

  // onAuthStateChanged(auth, (currentUser)=>{
  //   if(currentUser){
  //     console.log("has current user", currentUser);
  //   }
  //   else{
  //     console.log("no current user", currentUser);
  //   }
  // })

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log("current user on auth state changed:", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () =>{
      unsubscribe();
    }
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signinUser,
    signoutUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
