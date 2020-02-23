import React, { Component } from "react";
import TopicSevices from "../../services/topics.sevices";

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
  }

  render() {
    return (
      <div>
        {this.state.topics.map(topic => (
          <h2>{topic.name}</h2>
        ))}
      </div>
    );
  }
}

export default SearchEvent;
