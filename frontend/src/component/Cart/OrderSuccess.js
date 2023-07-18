import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./OrderSuccess.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleIcon />

      <h2>Your Order has been Placed successfully </h2>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;
