import React from "react";
import { WithAuthConsumer } from "../contexts/AuthContext";

const UserDetail = ({ user, friendship, currentUser }) => {
  return (
    <div className="user-card">
      <div className="card-img-container">
        <img src={user.avatar} alt="imagen" />
      </div>
      <div className="user-items">
        <h5>@{user.nickName}</h5>
        <p>{`${user.name} ${user.lastName1} ${user.lastName2}`}</p>
        <div className="button-card">
          {!friendship.state1 && (
            <button className="btn btn-success btn-block">
              Solicitar Amistad
            </button>
          )}
          {friendship.state1 === "Pending" &&
            currentUser.id === friendship.user1.id && (
              <button className="btn btn-success btn-block">Pending</button>
            )}
          {friendship.state2 === "Pending" &&
            currentUser.id === friendship.user2.id && (
              <button className="btn btn-success btn-block">Pending</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default WithAuthConsumer(UserDetail);
