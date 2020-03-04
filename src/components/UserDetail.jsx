import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div className="user-card">
      <div className="card-img-container">
        <img src={user.avatar} alt="imagen" />
      </div>
      <div className="user-items">
        <h5>@{user.nickName}</h5>
        <p>{`${user.name} ${user.LastName1} ${user.LastName2}`}</p>
        <div className="button-card">
          <button className="btn btn-success">Ver</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
