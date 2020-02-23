import React, { Component } from "react";

import "../../styles/Forms.css";
import UserServices from "../../services/user.services";
import { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class Login extends Component {
  state = {
    userData: {
      email: "",
      password: ""
    },
    error: false,
    loading: false,
    success: false
  };

  handleChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: files ? files[0] : value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { userData } = this.state;

    this.setState({ loading: true, error: false }, () => {
      UserServices.login(userData)
        .then(user => {
          this.props.setUser(user);
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    });
  };

  render() {
    if (this.props.currentUser) {
      return <Redirect to="/user" />;
    }
    return (
      <Fragment>
        <form className="form-margins" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={this.state.userData.email}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.userData.password}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary">
            Login
          </button>
          <a className="mt-5" href="/register">
            Create Account
          </a>
        </form>
      </Fragment>
    );
  }
}

export default WithAuthConsumer(Login);
