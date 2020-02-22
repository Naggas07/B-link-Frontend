import React, { createContext, Component } from "react";
import UserService from "../services/user.services";

const AuthContext = createContext();

export class AuthContextProvider extends Component {
  state = {
    user: JSON.parse(localStorage.getItem("user"))
  };

  setUser = user => {
    localStorage.setItem("user", user ? JSON.stringify(user) : null);
    this.setState({ user });
  };

  logout = () => {
    UserService.logout().then(() => this.setUser());
  };

  render() {
    const value = {
      currentUser: this.state.user,
      setUser: this.setUser,
      logout: this.logout
    };
    return (
      <AuthContext.Provider value={value}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const WithAuthConsumer = UpdateComponent => props => (
  <AuthContext.Consumer>
    {authProps => <UpdateComponent {...props} {...authProps} />}
  </AuthContext.Consumer>
);

export default AuthContext;
