import React, { Component } from "react";
import { WithAuthConsumer } from "../contexts/AuthContext";
import eventServices from "../services/events.services";
import BusinessDetail from "./BusinessDetail";

class Followers extends Component {
  state = {
    followers: []
  };

  componentDidMount() {
    eventServices
      .followers(this.props.currentUser.id)
      .then(followers => this.setState({ followers }));
  }
  render() {
    const { followers } = this.state;
    return (
      <div className="container mt-4">
        {followers.length > 0 && (
          <div className="user-follows">
            <h3 className="header-home">Tus seguidores</h3>
            <div className="follow-home-container">
              {followers.map((follow, i) => (
                <BusinessDetail
                  key={i}
                  user={follow.userFollow}
                  date={follow.createdAt}
                  updated={this.updated}
                  follows={{ user: "ok" }}
                />
              ))}
            </div>
          </div>
        )}
        {followers.length === 0 && <h1>No hay seguidores</h1>}
      </div>
    );
  }
}

export default WithAuthConsumer(Followers);
