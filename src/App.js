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
import SearchFriends from "./components/SearchFriends";
import FollowResume from "./components/FollowResume";

function App() {
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
        <AuthenticatedRoute path="/follows">
          <FollowResume />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/admin">
          <Admin />
        </AuthenticatedRoute>
        <AuthenticatedRoute path="/people">
          <SearchFriends />
        </AuthenticatedRoute>
        <Route exact path="/login">
          <RegisterLoginContainer
            right={<Login />}
            left={
              "https://i.pinimg.com/originals/e2/b2/0d/e2b20d4e1c5b1cdb1383338ef9030ad7.jpg"
            }
          />
        </Route>
        <Route exact path="/register">
          <RegisterLoginContainer
            right={<RegisterUser type="User" />}
            left={
              "https://www.sevillametal.org/web/images/img/2020/cronicas/magodeoz/0J5A7480_copy.jpg"
            }
          />
        </Route>
        <Route exact path="/business">
          <RegisterLoginContainer
            right={<RegisterUser type="Business" />}
            left={
              "https://www.agronewscomunitatvalenciana.com/sites/default/files/articles/Passive_Idai1.jpg"
            }
          />
          />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;
