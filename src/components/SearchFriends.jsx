import React, { Component, Fragment } from "react";
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
  refreshUsers(id) {
    friendServices.friends(id).then(friends => this.setState({ friends }));
    friendServices.pendings(id).then(pendings => this.setState({ pendings }));
    UserServices.getUsers().then(users => {
      let noRelation = users.filter(user => {
        console.log(user);
        return !this.state.friends.includes(user);
      });
      console.log("no relation", noRelation, users);
      this.setState({ users });
    });
  }

  reset = () => {
    window.location.reload();
    UserServices.getUsers().then(users => this.setState(users));
  };

  handelSubmit = event => {
    event.preventDefault();
    const { text } = this.state.form;

    friendServices.searchUser(text).then(users => this.setState({ users }));
  };

  componentDidMount() {
    this.refreshUsers(this.props.currentUser.id);
  }

  render() {
    const friends = this.state.friends.map(friendship => {
      if (friendship.user1.id === this.props.currentUser.id) {
        return friendship.user2;
      } else {
        return friendship.user1;
      }
    });

    const pendigns = this.state.pendings.map(friendship => {
      if (friendship.user1.id === this.props.currentUser.id) {
        return friendship.user2;
      } else {
        return friendship.user1;
      }
    });
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
            <button className="btn btn-secondary" onClick={this.reset}>
              All Users
            </button>
          </form>
        </div>
        {this.state.pendings.length > 0 && (
          <Fragment>
            <h3>{`Pendientes - ${this.state.pendings.length}`}</h3>
            <div className="total-pendings-container">
              {pendigns.map((user, i) => (
                <UserDetail
                  key={i}
                  user={user}
                  friendship={this.state.pendings[i]}
                  refreshUsers={this.refreshUsers}
                />
              ))}
            </div>
          </Fragment>
        )}
        {this.state.friends.length > 0 && (
          <Fragment>
            <h3>{`Mis Amigos - ${this.state.friends.length}`}</h3>
            <div className="total-friends-container">
              {friends.map((user, i) => (
                <UserDetail
                  key={i}
                  user={user}
                  friendship={this.state.friends[i]}
                  refreshUsers={this.refreshUsers}
                />
              ))}
            </div>
          </Fragment>
        )}

        <h3>Usuarios</h3>
        <div className="total-users-container">
          {this.state.users.map((user, i) => (
            <UserDetail
              key={i}
              user={user}
              friendship={{}}
              refreshUsers={this.refreshUsers}
            />
          ))}
          {this.state.users.length < 1 && <h3>Usuarios no encontrados</h3>}
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(SearchFriends);
