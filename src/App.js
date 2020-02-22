import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nabvar from "./components/navbar/Navbar.component";
import { Router, Switch } from "react-router-dom";
import RegisterLoginContainer from "./components/misc/RegisterLoginContainer";

function App() {
  return (
    <div className="App">
      <Nabvar logo={logo} />
      <RegisterLoginContainer />
      {/* <Router>
        <Switch></Switch>
      </Router> */}
    </div>
  );
}

export default App;
