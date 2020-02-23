import React from "react";
import { WithAuthConsumer } from "../../contexts/AuthContext";

import "../../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const Nabvar = ({ logo, currentUser, logout }) => {
  return (
    <nav className="navbar navbar-light bg-light sticky-top">
      <div className="main-nav">
        <a className="navbar-brand" href="/">
          <img src={logo} width="50" height="50" alt="logo" />
          B_link
        </a>

        {currentUser && (
          <div className="navigation">
            <ul>
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  activeClassName="font-weight-bold"
                  to="/events"
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  activeClassName="font-weight-bold"
                  to="/catalog"
                >
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  activeClassName="font-weight-bold"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  activeClassName="font-weight-bold"
                  to="/where"
                >
                  Where
                </NavLink>
              </li>
              {currentUser.userType === "Admin" && (
                <li className="nav-item active">
                  <NavLink
                    className="nav-link"
                    activeClassName="font-weight-bold"
                    to="/admin"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {currentUser && (
        <div className="nav-items">
          <div className="user-nav">
            <img src={currentUser.avatar} alt="avatar" />
            <p>{currentUser.nickName}</p>
          </div>
          <button type="submit" onClick={logout} className="btn btn-danger">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default WithAuthConsumer(Nabvar);
