import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterLoginContainer from "./components/misc/RegisterLoginContainer";
import Login from "./components/user/Login";
import RegisterUser from "./components/user/RegisterFormUser";
import Nabvar from "./components/navbar/Navbar";
import AuthenticatedRoute from "./components/misc/Authenticated.route";
import Home from "./components/user/Home";

function App() {
  return (
    <div className="App">
      <Nabvar logo={logo} />

      <Switch>
        <AuthenticatedRoute exact path="/user">
          <Home />
        </AuthenticatedRoute>
        <Route exact path="/login">
          <RegisterLoginContainer right={<Login />} />
        </Route>
        <Route exact path="/register">
          <RegisterLoginContainer right={<RegisterUser />} />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
