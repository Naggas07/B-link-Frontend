import React, { Component } from "react";
import TopicSevices from "../../services/topics.sevices";
import eventServices from "../../services/events.services";
import EventResume from "./EventResume";
import { WithAuthConsumer } from "../../contexts/AuthContext";

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
        <div className="search-events">
          <input type="text" />
        </div>
        <div className="container topic-container">
          {this.state.topics.map((topic, i) => (
            <span key={i} className="badge badge-pill badge-info">
              {topic.name}
            </span>
          ))}
        </div>

        <div className="container">
          <div className="header-events">
            <h3>Eventos</h3>
            {this.props.currentUser.userType === "Admin" ||
              (this.props.currentUser.userType === "Business" && (
                <a href="/events/new" className="btn btn-dark">
                  Create
                </a>
              ))}
          </div>
          {this.state.events.map((event, i) => (
            <EventResume key={i} event={event} />
          ))}
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(SearchEvent);
