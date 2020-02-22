import React from "react";
import { Redirect, Route } from "react-router-dom";
import { WithAuthConsumer } from "../../contexts/AuthContext";

const AuthenticatedRoute = props => {
  if (!props.CurrentUser) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
};

export default WithAuthConsumer(AuthenticatedRoute);
