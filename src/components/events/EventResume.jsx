import React from "react";
import "../../styles/events/EventResume.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";

const EventResume = ({ event, currentUser }) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: "false"
  };

  return (
    <Link to={`/events/detail/${event.id}`} params={{ id: event.id }}>
      <div className="resume-container">
        <div className="image-container">
          <div className="avatar-container-user"></div>
          <img src={event.image} alt="event" />
        </div>
        <div className="resume-info-container">
          <h6>{event.title}</h6>
          <p>{new Date(event.date).toLocaleString("es-ES", options)}</p>
          <div className="event-item-list">
            <p>
              <i
                className="fa fa-users"
                aria-hidden="true"
              >{` ${event.limitUsers}`}</i>
            </p>
            <p>
              <i className="fa fa-object-group" aria-hidden="true"></i>
              {` ${event.limitUsers - event.reserves.length}`}
            </p>
            <p>
              <i className="fa fa-money" aria-hidden="true">
                {`  ${event.price}`} €
              </i>
            </p>
          </div>
        </div>
        {currentUser.userType === "Admin" && (
          <div className="admin-buttons">
            <button className="btn btn-danger">Borrar</button>
          </div>
        )}

        {currentUser.userType === "Business" &&
          currentUser.id === event.business && (
            <div className="businness-buttons">
              <button className="btn btn-success">Editar</button>
            </div>
          )}

        {currentUser.userType === "User" && (
          <div className="user-buttons">
            <button className="btn btn-info">Detalles</button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default WithAuthConsumer(EventResume);
