import React, { Component } from "react";
import TopicSevices from "../../../services/topics.sevices";
import TopicDetail from "./TopicDetail";
import "../../../styles/Admin/Topics.css";

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
      <div className="container">
        <div className="create-topic">
          <a href="/admin/topics/new" className="btn btn-success">
            New topic
          </a>
        </div>
        <div className="container topics-global-container">
          {this.state.topics.map((topic, i) => (
            <TopicDetail topic={topic} key={i} />
          ))}

          {/* pendiente de ver como presentarlos para poder administrarlos */}
        </div>
      </div>
    );
  }
}

export default Topics;
