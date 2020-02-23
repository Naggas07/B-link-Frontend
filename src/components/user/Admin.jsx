import React from "react";
import SideBarAdmin from "./Admin/SidebarAdmin";
import { Switch, Route } from "react-router-dom";
import Topics from "./Admin/Topics";

const admin = () => {
  return (
    <div className="admin-container">
      <SideBarAdmin />
      <Switch>
        <Route exact path="/admin/topics">
          <Topics />
        </Route>
      </Switch>
    </div>
  );
};

export default admin;
