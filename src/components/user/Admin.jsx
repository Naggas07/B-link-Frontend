import React from "react";
import SideBarAdmin from "./Admin/SidebarAdmin";
import { Switch, Route } from "react-router-dom";
import Topics from "./Admin/Topics";
import AllUsers from "./Admin/AllUsers";
import Users from "./Admin/Users";
import Business from "./Admin/Business";
import SearEvents from "../events/SearEvents";
import NewTopic from "../NewTopic";

const admin = () => {
  return (
    <div className="admin-container">
      <SideBarAdmin />
      <Switch>
        <Route exact path="/admin/topics">
          <Topics />
        </Route>
        <Route exact path="/admin/total-users">
          <AllUsers />
        </Route>
        <Route exact path="/admin/users">
          <Users />
        </Route>
        <Route exact path="/admin/business">
          <Business />
        </Route>
        <Route exact path="/admin/events">
          <SearEvents />
        </Route>
      </Switch>
    </div>
  );
};

export default admin;
