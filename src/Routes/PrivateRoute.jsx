import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  let location = useLocation();
  // console.log(location);

  if(loading){
    return <div className="text-center"><span className="my-8 loading loading-infinity loading-xl"></span></div>
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return (
      <Navigate to={"/login"} state={location?.pathname}></Navigate>
    );
  }
  return children;
};
export default PrivateRoute;
