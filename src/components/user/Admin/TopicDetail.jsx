import React, { Component } from "react";
import "../../../styles/Topics.css";

import topicsSevices from "../../../services/topics.sevices";

class TopicDetail extends Component {
  state = {
    topic: this.props.topic
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      topic: {
        ...this.state.topic,
        [name]: files ? files[0] : value
      }
    });
  };

  handelSubmit = event => {
    event.preventDefault();

    const { topic } = this.state;

    console.log(topic);

    this.setState({ error: false }, () => {
      topicsSevices
        .updateTopic(topic.id, topic)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          this.setState({ error: true });
        });
    });
  };

  render() {
    const { topic } = this.state;
    return (
      <div className="card text-white bg-info mb-3 topics-container">
        <div className="card-header topics">
          <p>{topic.name}</p>
          <button
            className="btn btn-secondary"
            data-toggle="modal"
            data-target="#editTopic"
          >
            Edit
          </button>
          <div
            className="modal fade"
            id="editTopic"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="false"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Editar tema</h5>
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
                        value={topic.name}
                        onChange={this.handelChange}
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">Estado</label>
                      <select
                        className="form-control"
                        name="state"
                        value={topic.state}
                        onChange={this.handelChange}
                      >
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-success">
                        Editar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{topic.state}</h5>
          <p className="card-text">{`Fecha de creación: ${new Date(
            topic.createdAt
          ).toLocaleString("es-ES")}`}</p>
          <p className="card-text">
            {`Fecha de actualización: ${new Date(
              topic.updatedAt
            ).toLocaleString("es-ES")}`}
          </p>
        </div>
      </div>
    );
  }
}

export default TopicDetail;
