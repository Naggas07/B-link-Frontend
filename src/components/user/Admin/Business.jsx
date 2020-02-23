import React, { Component } from "react";
import UserServices from "../../../services/user.services";
import ResumeUser from "../ResumeUser";
import "../../../styles/Admin/UserList.css";

class Business extends Component {
  state = {
    users: [0]
  };

  componentDidMount() {
    UserServices.getBusiness().then(users =>
      this.setState({
        users
      })
    );
  }
  render() {
    return (
      <div className="container-fluid all-users-container">
        <div className="container-list-user">
          <div className="row title-users">
            <h4>Users</h4>
          </div>
          <div className="resume-container-users">
            {this.state.users.map((user, i) => (
              <ResumeUser user={user} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
