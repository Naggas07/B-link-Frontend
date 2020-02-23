import React, { Component } from "react";

class Home extends Component {
  state = {
    friends: [],
    events: [],
    follows: []
  };
  render() {
    return (
      <div className="container">
        <div className="user-friends">friends</div>
        <div className="user-events">Events</div>
        <div className="user-follows">Follows</div>
      </div>
    );
  }
}

export default Home;
