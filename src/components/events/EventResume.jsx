import React from "react";
import "../../styles/events/EventResume.css";

const EventResume = ({ event }) => {
  return (
    <div className="resume-container">
      <div className="image-container">
        <img src={event.image} alt="event" />
      </div>
      <div className="resume-info-container">
        <h6>{event.title}</h6>
        <p>{event.date}</p>
        <p>{event.limitUsers}</p>
        <p>{event.price}</p>
      </div>
    </div>
  );
};

export default EventResume;
