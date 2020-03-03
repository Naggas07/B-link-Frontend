import React, { Component } from "react";
import TopicSevices from "../../../services/topics.sevices";
import TopicDetail from "./TopicDetail";
import "../../../styles/Admin/Topics.css";
import topicsSevices from "../../../services/topics.sevices";

class Topics extends Component {
  state = {
    topics: [],
    newTopic: {
      name: ""
    },
    success: false,
    error: false
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      newTopic: {
        ...this.state.newTopic,
        [name]: files ? files[0] : value
      }
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { newTopic } = this.state;

    this.setState({ error: false }, () => {
      topicsSevices
        .newTopic(newTopic)
        .then(() => {
          window.location.reload();
          this.setState({ success: true });
        })
        .catch(() => {
          this.setState({ error: true });
        });
    });
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
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#newForm"
          >
            Nuevo tema
          </button>

          <div
            className="modal fade"
            id="newForm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Nuevo Tema</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="container" onSubmit={this.handelSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Nombre del tema</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={this.state.newTopic.name}
                        onChange={this.handelChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-success">
                        Crear
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container topics-global-container">
          {this.state.topics.map((topic, i) => (
            <TopicDetail topic={topic} index={i} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Topics;
