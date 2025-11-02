import React, { useContext } from "react";
import { AuthconText } from "../firebase/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthconText);
  const location = useLocation();

  if (loading) {
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-ring loading-xl"></span>
      <span className="loading loading-ring loading-xl"></span>
      <span className="loading loading-ring loading-xl"></span>
    </div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ form: location }}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
