import React from "react";

const TopicDetail = ({ topic }) => {
  return (
    <div className="card text-white bg-info mb-3 topics-container">
      <div className="card-header">{topic.name}</div>
      <div className="card-body">
        <h5 className="card-title">{topic.state}</h5>
        <p className="card-text">{`Fecha de creación: ${new Date(
          topic.createdAt
        ).toLocaleString("es-ES")}`}</p>
        <p className="card-text">
          {`Fecha de actualización: ${new Date(topic.updatedAt).toLocaleString(
            "es-ES"
          )}`}
        </p>
      </div>
    </div>
  );
};

export default TopicDetail;
