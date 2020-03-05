import React from "react";
import { WithAuthConsumer } from "../contexts/AuthContext";
import friendServices from "../services/friendservices";

const BusinessDetail = ({ user, currentUser, date, follows }) => {
  let convertTime = date => {
    let newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() +
      1}/${newDate.getFullYear()}`;
  };

  const newFollow = () => {
    const follow = {
      business: user.id,
      user: currentUser.id
    };

    friendServices.newFollow(follow).then(() => {
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
          {!follows.user && (
            <button className="btn btn-success" onClick={newFollow}>
              Seguir
            </button>
          )}
          {follows.user && (
            <button className="btn btn-secondary disabled" onClick={newFollow}>
              {`Seguido desde: ${convertTime(date)}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithAuthConsumer(BusinessDetail);
