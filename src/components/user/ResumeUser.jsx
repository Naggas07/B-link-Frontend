import React from "react";

const ResumeUser = ({ user }) => {
  return (
    <div className="resume-user-container">
      <img src={user.avatar} alt="avatar" />
      <div className="description">
        <p> {`${user.name} ${user.lastName1} ${user.lastName2}`}</p>
        <p> {`@${user.nickName}`}</p>
      </div>
      <div className="types-container">{user.userType}</div>
      <div className="admin-buttons">
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-info">Edit</button>
      </div>
    </div>
  );
};

export default ResumeUser;
