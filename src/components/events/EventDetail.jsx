import React, { Fragment } from "react";
import { Component } from "react";
import eventServices from "../../services/events.services";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import "../../styles/events/EventDetail.css";
import UserResume from "../UserResume";
import { Redirect } from "react-router-dom";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      comments: [],
      newComment: {
        event: "",
        user: "",
        message: ""
      }
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").reverse();
    eventServices.eventDetail(id[0]).then(event => {
      let newComment = {
        event: event.id,
        user: this.props.currentUser.id,
        message: ""
      };
      this.setState({ event, newComment });
      const { id } = this.state.event;
      eventServices
        .getComments(id)
        .then(comments => this.setState({ comments }));
    });
  }

  handelSubmit = event => {
    event.preventDefault();

    console.log(this.state.newComment);
    eventServices.createComment(this.state.newComment).then(message => {
      console.log(message);
      window.location.reload();
    });
  };

  handelChange = event => {
    const { name, value, files } = event.target;

    this.setState({
      newComment: {
        ...this.state.newComment,
        [name]: files ? files[0] : value
      }
    });
  };

  handelComments = () => {
    const { id } = this.state.event;
    eventServices.getComments(id).then(comments => this.setState({ comments }));
  };

  render() {
    console.log(this.state);
    const { event } = this.state;
    return (
      <div className="container-event">
        <div className="container-image">
          <img src={event.image} alt="event" id="prevent-image" />
        </div>
        <h3 className="event-title">{event.title}</h3>
        <div className="container">
          <div className="event-details">
            <div className="event-description">
              {this.state.event.reserves && (
                <div className="container-item-details">
                  <div className="reserves">
                    <div className="limitUsers item-resume-detail">
                      <h5>
                        <i className="fa fa-users" aria-hidden="true" /> Aforo
                        total
                      </h5>
                      <p className="item-resume">{` ${event.limitUsers}`}</p>
                    </div>

                    <div className="reserveUser item-resume-detail">
                      <h5>
                        <i className="fa fa-object-group" aria-hidden="true" />
                        Registros
                      </h5>
                      <p className="item-resume">{` ${event.limitUsers -
                        event.reserves.length}`}</p>
                    </div>
                    <div className="reserveUser item-resume-detail">
                      <h5>
                        <i className="fa fa-money" aria-hidden="true" />
                        Importe
                      </h5>
                      <p className="item-resume">{`  ${event.price} €`}</p>
                    </div>
                  </div>
                  <button className="btn btn-block btn-secondary">
                    Reserve
                  </button>
                </div>
              )}
              <div className="describe-event">
                <h4>Descripción del evento</h4>
                <p>{event.describe}</p>
              </div>
            </div>
            <div className="business-data">
              {this.state.event.business && (
                <Fragment>
                  <h3>Creado por:</h3>
                  <div className="business-details">
                    <img src={event.business.avatar} alt="datos" />
                    <h6>{event.business.name}</h6>
                  </div>
                </Fragment>
              )}
              {this.state.event.reserves && (
                <div className="event-users">
                  <h3>Van a asistir:</h3>
                  <div className="user-containers">
                    {event.reserves.map((user, i) => {
                      return <UserResume user={user} key={i} />;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="event-messages">
            <div className="buttons-container">
              <button
                className="btn btn-secondary mr-4"
                onClick={this.handelComments}
              >
                Cargar comentarios
              </button>
              <button
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#newComment"
              >
                Nuevo comentario
              </button>

              <div
                className="modal fade"
                id="newComment"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="false"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Escribe aquí tu mensaje</h5>
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
                          <label htmlFor="message">Mensaje</label>
                          <input
                            type="text"
                            className="form-control"
                            name="message"
                            value={this.state.newComment.message}
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
            {this.state.comments && (
              <div className="comments-container">
                {this.state.comments.map((comment, i) => (
                  <p key={i}>{comment.message}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(EventDetail);
