import React from "react";
import RegisterUser from "../user/RegisterFormUser";
import "../../styles/RegisterLoginContainer.css";

const RegisterLoginContainer = () => {
  return (
    <div className="container form-login-container">
      <div className="form-media-item"></div>
      <div className="form-media-item">
        <RegisterUser />
      </div>
    </div>
  );
};

export default RegisterLoginContainer;
