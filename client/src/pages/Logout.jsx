import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Logout = () => {
  const { removeToken } = useAuth();
  useEffect(() => {
    removeToken();
  }, [removeToken]);
  return <Navigate to="/login" />;
};

export default Logout;
