import React, { Component } from "react";

import "../../styles/Forms.css";
import UserServices from "../../services/user.services";
import { Redirect } from "react-router-dom";

class RegisterUser extends Component {
  state = {
    userData: {
      nickName: "",
      name: "",
      lastName1: "",
      lastName2: "",
      email: "",
      password: "",
      avatar: null
    },
    error: false,
    loading: false,
    success: false
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      userData: {
        ...this.state.userData,
        [name]: files ? files[0] : value
      }
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { userData } = this.state;

    const formData = new FormData();
    formData.append("nickName", userData.nickName);
    formData.append("name", userData.name);
    formData.append("lastName1", userData.lastName1);
    formData.append("lastName2", userData.lastName2);
    formData.append("avatar", userData.avatar);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("userType", "User");

    this.setState({ loading: true, error: false }, () => {
      UserServices.singUp(formData)
        .then(() => {
          this.setState({ success: true });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    });
  };

  render() {
    if (this.state.success) {
      return <Redirect to="/login" />;
    }
    return (
      <form className="form-margins" onSubmit={this.handelSubmit}>
        <div className="form-group">
          <label htmlFor="nickName">Nickname</label>
          <input
            type="text"
            className="form-control"
            name="nickName"
            value={this.state.userData.nickName}
            onChange={this.handelChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={this.state.userData.name}
            onChange={this.handelChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName1">lastName1</label>
          <input
            type="text"
            className="form-control"
            name="lastName1"
            value={this.state.userData.lastName1}
            onChange={this.handelChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName2">lastName2</label>
          <input
            type="text"
            className="form-control"
            name="lastName2"
            value={this.state.userData.lastName2}
            onChange={this.handelChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={this.state.userData.email}
            onChange={this.handelChange}
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
            onChange={this.handelChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            type="file"
            className="form-control"
            name="avatar"
            onChange={this.handelChange}
            autoComplete="off"
            id="avatar"
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
        <a href="/login">Back to login</a>
      </form>
    );
  }
}

export default RegisterUser;
