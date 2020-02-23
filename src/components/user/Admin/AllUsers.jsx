import React, { Component } from "react";
import UserServices from "../../../services/user.services";
import ResumeUser from "../ResumeUser";

class AllUsers extends Component {
  state = {
    users: [0]
  };

  componentDidMount() {
    UserServices.getAllUsers().then(users =>
      this.setState({
        users
      })
    );
  }
  render() {
    return (
      <div className="container">
        Entra
        <div className="container-list-user">
          {this.state.users.map((user, i) => (
            <ResumeUser user={user} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default AllUsers;
