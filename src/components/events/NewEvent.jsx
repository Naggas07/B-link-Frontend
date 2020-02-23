import React, { Component } from "react";
import "../../styles/events/NewEvent.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import topicsSevices from "../../services/topics.sevices";
import eventServices from "../../services/events.services";

class NewEvent extends Component {
  state = {
    topics: [],
    events: {
      title: "",
      image: null,
      topics: [],
      date: "",
      hour: "",
      limitUser: 0,
      price: 0,
      business: this.props.currentUser.id
    },
    loading: false,
    error: false,
    success: false
  };

  handleSubmit = event => {
    event.preventDefault();

    const { events } = this.state;
    console.log(events);
    const formData = new FormData();
    formData.append("title", this.state.events.title);
    console.log(formData.title);

    console.log(formData);

    // this.setState({ loading: true, error: false }, () => {
    //   eventServices
    //     .newEvent(formData)
    //     .then(() => {
    //       this.setState({ success: true });
    //     })
    //     .catch(() => {
    //       this.setState({ error: true, loading: false });
    //     });
    // });
  };

  componentDidMount() {
    topicsSevices.getTopics().then(topics => this.setState({ topics }));
  }

  handleChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      events: {
        ...this.state.events,
        [name]: files ? files[0] : value
      }
    });
  };
  render() {
    return (
      <div className="container event-form">
        <div className="business-resume">
          Nuevo evento de {this.props.currentUser.name}
        </div>
        <form className="form-event" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Nombre del evento</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.events.title}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Imagen del evento</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={this.handleChange}
              autoComplete="off"
              id="image"
            />
          </div>
          <div className="form-group">
            <div className="row">
              <legend className="col-form-label col-sm-2 pt-0">
                Temas relacionados
              </legend>
              <div className="container-checks">
                {this.state.topics.map((check, i) => {
                  return (
                    <div key={i} className="form-check check-style">
                      <input type="radio" />
                      <label htmlFor="">{check.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="form-group group-container">
            <div className="form-group media-items first-item">
              <label htmlFor="date">Fecha</label>
              <input
                type="date"
                value={this.state.events.date}
                className="form-control"
                name="date"
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group media-items">
              <label htmlFor="hour">Hora</label>
              <input
                type="time"
                className="form-control"
                name="hour"
                value={this.state.events.hour}
                onChange={this.handleChange}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="user-money group-container">
            <div className="form-group media-items first-item">
              <label htmlFor="limitUser">Aforo del evento</label>
              <input
                type="number"
                className="form-control"
                name="limitUser"
                value={this.state.events.limitUser}
                onChange={this.handleChange}
                autoComplete="off"
                id="limitUser"
              />
            </div>
            <div className="form-group media-items">
              <label htmlFor="price">Precio del evento</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={this.state.events.price}
                onChange={this.handleChange}
                autoComplete="off"
                id="price"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-block btn-success">
            Create
          </button>
          <a href="/events">Back to events</a>
        </form>
      </div>
    );
  }
}

export default WithAuthConsumer(NewEvent);