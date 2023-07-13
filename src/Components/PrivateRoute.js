import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoute(props) {
  const { Component } = props;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();
useEffect(() => {
    if (!isLoggedIn) {
        navigate("/login")
      } 
}, [isLoggedIn,navigate])


    return (
      <div>
        <Component />
      </div>
    );

}

export default PrivateRoute;
