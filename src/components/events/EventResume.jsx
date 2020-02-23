import React from "react";
import "../../styles/events/EventResume.css";
import { WithAuthConsumer } from "../../contexts/AuthContext";

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
    <div className="resume-container">
      <div className="image-container">
        <img src={event.image} alt="event" />
      </div>
      <div className="resume-info-container">
        <h6>{event.title}</h6>
        <p>{new Date(event.date).toLocaleString("es-ES", options)}</p>
        <p>{event.limitUsers}</p>
        <p>{event.limitUsers - event.reserves.length}</p>
        <p>{event.price}</p>
      </div>
      {currentUser.userType === "Admin" && (
        <div className="admin-buttons">
          <button className="btn btn-danger">delete</button>
        </div>
      )}

      {currentUser.userType === "Business" &&
        currentUser.id === event.business && (
          <div className="businness-buttons">
            <button className="btn btn-success">Edit</button>
          </div>
        )}
    </div>
  );
};

export default WithAuthConsumer(EventResume);
