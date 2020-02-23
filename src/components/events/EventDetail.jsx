import React from "react";
import { Component } from "react";
import eventServices from "../../services/events.services";
import "../../styles/events/EventDetail.css";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "5e482b752bd0f608849ab67a",
      event: []
    };
  }

  componentDidMount() {
    eventServices.eventDetail(this.state.id).then(event => {
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

export default EventDetail;
