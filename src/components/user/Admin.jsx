import React from "react";
import SideBarAdmin from "./Admin/SidebarAdmin";
import { Switch, Route } from "react-router-dom";
import Topics from "./Admin/Topics";
import AllUsers from "./Admin/AllUsers";

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
      </Switch>
    </div>
  );
};

export default admin;
