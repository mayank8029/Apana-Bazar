import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  isAdmin,
  redirectLink = "/login",
  redirectAdmin = "/login",
}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  if (loading === false && isAuthenticated === false) {
    return <Navigate to={redirectLink} />;
  }
  if (loading === false && isAdmin === true && user.role !== "admin") {
    return <Navigate to={redirectAdmin} />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
