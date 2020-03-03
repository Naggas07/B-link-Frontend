import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import RegisterLoginContainer from "./components/misc/RegisterLoginContainer";
import Login from "./components/user/Login";
import SearchEvent from "./components/events/SearEvents";
import RegisterUser from "./components/user/RegisterFormUser";
import Nabvar from "./components/navbar/Navbar";
import AuthenticatedRoute from "./components/misc/Authenticated.route";
import Home from "./components/user/Home";
import Admin from "./components/user/Admin";
import NewEvent from "./components/events/NewEvent";
import EventDetail from "./components/events/EventDetail";

function App() {
  console.info('dot env => ', process.env.REACT_APP_GOOGLE_MAPS_API)
  return (
    <div className="App">
      <Nabvar logo={logo} />

      <Switch>
        <AuthenticatedRoute exact path="/user">
          <Home />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/events/new">
          <NewEvent />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/events/detail">
          {props => <EventDetail {...props} />}
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/events">
          <SearchEvent />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/admin">
          <Admin />
        </AuthenticatedRoute>
        <Route exact path="/login">
          <RegisterLoginContainer right={<Login />} />
        </Route>
        <Route exact path="/register">
          <RegisterLoginContainer right={<RegisterUser type="User" />} />
        </Route>
        <Route exact path="/business">
          <RegisterLoginContainer right={<RegisterUser type="Business" />} />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
