import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

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
    });

    return () =>{
      unsubscribe();
    }
  }, []);

  const userInfo = {
    user,
    createUser,
    signinUser,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
