import React, { Component } from "react";
import TopicSevices from "../../services/topics.sevices";
import eventServices from "../../services/events.services";
import EventResume from "./EventResume";
import { WithAuthConsumer } from "../../contexts/AuthContext";

class SearchEvent extends Component {
  state = {
    events: [],
    topics: [],
    form: {
      search: ""
    }
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      form: {
        ...this.state.form,
        [name]: files ? files[0] : value
      }
    });
  };

  componentDidMount() {
    TopicSevices.activeTopics().then(topics =>
      this.setState({
        topics
      })
    );

    eventServices.getEvents().then(events => this.setState({ events }));
  }

  handelSubmit = event => {
    event.preventDefault();
    const { search } = this.state.form;
    const name = !search ? "no-text" : search;

    eventServices.searchEvent(name).then(events => this.setState({ events }));
  };

  render() {
    return (
      <div className="container">
        <div className="container form-user">
          <form className="form-users" onSubmit={this.handelSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control header-form"
                name="search"
                value={this.state.form.search}
                onChange={this.handelChange}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </form>
        </div>

        <div className="container topic-container">
          {this.state.topics.map((topic, i) => (
            <span key={i} className="badge badge-pill badge-info">
              {topic.name}
            </span>
          ))}
        </div>

        <div className="container">
          {(this.props.currentUser.userType === "Admin" ||
            this.props.currentUser.userType === "Business") && (
            <a href="/events/new" className="btn btn-success">
              New Event
            </a>
          )}
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
