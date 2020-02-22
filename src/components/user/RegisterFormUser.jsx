import React, { Component } from "react";

import "../../styles/Forms.css";

class RegisterUser extends Component {
  state = {
    userData: {
      nickName: "",
      name: "",
      lastName1: "",
      lastName2: "",
      email: "",
      password: "",
      userType: "User",
      avatar: ""
    },
    error: false,
    loading: false,
    success: false
  };
  render() {
    return (
      <form className="form-margins">
        <div className="form-group">
          <label htmlFor="nickName">NickName</label>
          <input type="text" className="form-control" name="nickName" />
        </div>
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName1">lastName1</label>
          <input type="text" className="form-control" name="lastName1" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName2">lastName2</label>
          <input type="text" className="form-control" name="lastName2" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">password</label>
          <input type="password" className="form-control" name="Password" />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input type="file" className="form-control" name="avatar" />
        </div>
        <button type="submit" className="btn btn-block btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default RegisterUser;
