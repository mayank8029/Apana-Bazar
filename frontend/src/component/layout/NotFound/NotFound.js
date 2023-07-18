import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "./NotFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <h3>Page Not Found </h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
