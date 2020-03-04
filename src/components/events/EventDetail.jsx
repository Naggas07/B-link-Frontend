import React, { Fragment } from "react";
import { Component } from "react";
import eventServices from "../../services/events.services";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import "../../styles/events/EventDetail.css";
import UserResume from "../UserResume";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: []
    };
  }

  componentDidMount() {
    const id = window.location.pathname.split("/").reverse();
    eventServices.eventDetail(id[0]).then(event => {
      this.setState({ event });
    });
  }

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
            <button className="btn btn-warning">Nuevo comentario</button>
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuthConsumer(EventDetail);
