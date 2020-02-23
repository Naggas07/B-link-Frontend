import React, { Component } from "react";
import TopicSevices from "../../services/topics.sevices";
import eventServices from "../../services/events.services";
import EventResume from "./EventResume";

class SearchEvent extends Component {
  state = {
    events: [],
    topics: []
  };

  componentDidMount() {
    TopicSevices.getTopics().then(topics =>
      this.setState({
        topics
      })
    );

    eventServices.getEvents().then(events => this.setState({ events }));
  }

  render() {
    return (
      <div className="container">
        {this.state.topics.map((topic, i) => (
          <h2 key={i}>{topic.name}</h2>
        ))}

        {this.state.events.map((event, i) => (
          <EventResume key={i} event={event} />
        ))}
      </div>
    );
  }
}

export default SearchEvent;
