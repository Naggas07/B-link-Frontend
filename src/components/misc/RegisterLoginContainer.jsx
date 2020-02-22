import React from "react";

import "../../styles/RegisterLoginContainer.css";

const RegisterLoginContainer = props => {
  return (
    <div className="container form-login-container shadow-lg rounded">
      <div className="form-media-item">{props.left}</div>
      <div className="form-media-item">{props.right}</div>
    </div>
  );
};

export default RegisterLoginContainer;
