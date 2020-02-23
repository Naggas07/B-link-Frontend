import React from "react";
import { WithAuthConsumer } from "../../../contexts/AuthContext";

import "../../../styles/Admin/SidebarAdmin.css";
import { NavLink } from "react-router-dom";

const SideBarAdmin = ({ currentUser }) => {
  return (
    <div className="wrapper">
      <nav className="sidebar-admin">
        <div className="card">
          <img className="card-img-top" src={currentUser.avatar} alt="avatar" />
          <div className="card-body">
            <h6 className="card-title">{`${currentUser.name} ${currentUser.lastName1} ${currentUser.lastName2}`}</h6>
            <p className="card-text">{`@${currentUser.nickName}`}</p>
          </div>
        </div>
        <div className="navigation-admin">
          <div className="admin-item">
            <NavLink
              className="admin-link"
              activeClassName="font-weight-bold"
              to="/admin/total-users"
            >
              All users
            </NavLink>
          </div>
          <div className="admin-item">
            <NavLink
              className="admin-link"
              activeClassName="font-weight-bold"
              to="/admin/users"
            >
              Users
            </NavLink>
          </div>
          <div className="admin-item">
            <NavLink
              className="admin-link"
              activeClassName="font-weight-bold"
              to="/admin/Business"
            >
              Business
            </NavLink>
          </div>
          <div className="admin-item">
            <NavLink
              className="admin-link"
              activeClassName="font-weight-bold"
              to="/admin/Events"
            >
              Events
            </NavLink>
          </div>
          <div className="admin-item">
            <NavLink
              className="admin-link"
              activeClassName="font-weight-bold"
              to="/admin/topics"
            >
              Topics
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WithAuthConsumer(SideBarAdmin);
