import React from "react";
import { Component } from "react";
import eventServices from "../../services/events.services";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import "../../styles/events/EventDetail.css";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").reverse();
    // console.info("id => ", id[0]);
    eventServices.eventDetail(id[0]).then(event => {
      this.setState({ event });
    });
  }

  render() {
    return (
      <div className="container-event">
        <div className="container-image">
          <img src={this.state.event.image} alt="event" id="prevent-image" />
        </div>
        <h3 className="event-title">{this.state.event.title}</h3>
        <div className="event-details"></div>
      </div>
    );
  }
}

export default WithAuthConsumer(EventDetail);
