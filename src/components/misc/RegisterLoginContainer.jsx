import React from "react";

import "../../styles/RegisterLoginContainer.css";

const RegisterLoginContainer = props => {
  return (
    <div className="container form-login-container shadow-lg rounded">
      <div className="form-media-item image-container-form">
        <img src={props.left} alt="imagen" />
      </div>
      <div className="form-media-item border-primary">{props.right}</div>
    </div>
  );
};

export default RegisterLoginContainer;
