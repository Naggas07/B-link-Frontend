import React, { Component } from "react";
import UserServices from "../services/user.services";

import "../styles/Friends.css";
import friendServices from "../services/friendservices";
import { WithAuthConsumer } from "../contexts/AuthContext";
import UserDetail from "./UserDetail";

class SearchFriends extends Component {
  state = {
    users: [],
    pendings: [],
    friends: [],
    form: {
      text: ""
    }
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: files ? files[0] : value
      }
    });
  };

  componentDidMount() {
    const { id } = this.props.currentUser;
    console.log(id);
    UserServices.getUsers().then(users => this.setState({ users }));
    friendServices.friends(id).then(friends => this.setState({ friends }));
    friendServices.pendings(id).then(pendings => this.setState({ pendings }));
  }

  render() {
    console.log(this.state.users);
    return (
      <div className="container">
        <div className="container form-user">
          <form className="form-users" onSubmit={this.handelSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control header-form"
                name="text"
                value={this.state.form.text}
                onChange={this.handelChange}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </form>
        </div>
        {this.state.pendings.length > 0 && (
          <div className="header-events">
            <h3>{`Pendientes - ${this.state.pendings.length}`}</h3>
          </div>
        )}
        {this.state.friends.length > 0 && (
          <div className="header-events">
            <h3>{`Mis Amigos - ${this.state.friends.length}`}</h3>
          </div>
        )}

        <h3>Usuarios</h3>
        <div className="total-users-container">
          {this.state.users.map((user, i) => (
            <UserDetail key={i} user={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(SearchFriends);
