import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  let location = useLocation();


  if(loading){
    return <span className="my-8 loading loading-infinity loading-xl"></span>
  }

  

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={"/login"} state={{ from: location }} replace> 
      {
        alert("You must login First!")
      }
      </Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
