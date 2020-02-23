import React, { Component } from "react";
import TopicSevices from "../../../services/topics.sevices";

class Topics extends Component {
  state = {
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
        {this.state.topics.map((topic, i) => (
          <h2 key={i}>{topic.name}</h2>
        ))}
      </div>
    );
  }
}

export default Topics;
