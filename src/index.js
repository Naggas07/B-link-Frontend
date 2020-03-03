import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

// styles
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
