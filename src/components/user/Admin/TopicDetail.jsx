import React, { Component } from "react";
import "../../../styles/Topics.css";

import topicsSevices from "../../../services/topics.sevices";

class TopicDetail extends Component {
  state = {
    topic: {
      name: '',
      state: ''
    }
  };

  componentDidMount() {
    this.setState({ topic: this.props.topic })
  }

  handleChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      topic: {
        ...this.state.topic,
        [name]: files ? files[0] : value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { topic } = this.state;

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
    const { handleSubmit, handleChange } = this
    
    return (
      <div className="card text-white bg-info mb-3 topics-container">
        <div className="card-header topics">
          <p>{topic.name}</p>
          <button
            className="btn btn-secondary"
            data-toggle="modal"
            data-target={`#editTopic-${this.props.index}`}>Edit</button>
          
          <div
            className="modal fade"
            id={`editTopic-${this.props.index}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="false">

          <ModalContent {...{ topic, handleSubmit, handleChange }} />
          
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

const ModalContent = ({ topic, handleSubmit, handleChange }) => {
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Editar tema</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close" >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form className="container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre del tema</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={topic.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">Estado</label>
              <select
                className="form-control"
                name="state"
                value={topic.state}
                onChange={handleChange}
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
  )
}

export default TopicDetail;
