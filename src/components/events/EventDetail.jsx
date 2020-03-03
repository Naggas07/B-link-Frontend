import React from "react";
import { Component } from "react";
import eventServices from "../../services/events.services";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import "../../styles/events/EventDetail.css";
import UserServices from "../../services/user.services";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      user: []
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").reverse();
    // console.info("id => ", id[0]);
    eventServices
      .eventDetail(id[0])
      .then(event => {
        this.setState({ event });
      })
      .then(ok =>
        UserServices.getUser(this.state.event.business).then(user => {
          this.setState({ user });
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-event">
        <div className="container-image">
          <img src={this.state.event.image} alt="event" id="prevent-image" />
        </div>
        <h3 className="event-title">{this.state.event.title}</h3>
        <div className="container">
          <div className="event-details"></div>
          <div className="event-messages">
            <button className="btn btn-warning">Nuevo comentario</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(EventDetail);
