import React from "react";
import { WithAuthConsumer } from "../contexts/AuthContext";
import friendServices from "../services/friendservices";
import { Redirect } from "react-router-dom";

const UserDetail = ({ user, friendship, currentUser, refreshUsers }) => {
  let convertTime = date => {
    let newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() +
      1}/${newDate.getFullYear()}`;
  };

  let redirect = "";
  const updateFriend = friendId => {
    const toUpdated = {
      userId: currentUser.id,
      toUpdate: "Acepted"
    };
    friendServices.updateFriend(friendId, toUpdated).then(() => {
      window.location.reload();
    });
  };

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
              <button
                className="btn btn-success btn-block"
                onClick={() => updateFriend(friendship.id)}
              >
                Pending
              </button>
            )}
          {friendship.state2 === "Pending" &&
            currentUser.id === friendship.user2.id && (
              <button
                className="btn btn-success btn-block"
                onClick={() => updateFriend(friendship.id)}
              >
                Pending
              </button>
            )}

          {friendship.state2 === "Pending" &&
            currentUser.id === friendship.user1.id && (
              <button className="btn btn-secondary btn-block disabled">{`Pending to: ${friendship.user2.nickName}`}</button>
            )}

          {friendship.state1 === "Pending" &&
            currentUser.id === friendship.user2.id && (
              <button className="btn btn-secondary btn-block disabled">{`Pending to: ${friendship.user1.nickName}`}</button>
            )}

          {friendship.state1 === "Acepted" &&
            friendship.state2 === "Acepted" && (
              <button className="btn btn-secondary btn-block disabled">{`Friends since: ${convertTime(
                friendship.updatedAt
              )}`}</button>
            )}
        </div>
      </div>
    </div>
  );
};

export default WithAuthConsumer(UserDetail);
