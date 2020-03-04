import React, { Fragment } from "react";

const UserResume = ({ user, friendship }) => {
  return (
    <Fragment>
      <div className="container-total-user">
        <div className="avatar-container">
          <img src={user.avatar} alt="avatar" />
        </div>

        <p className="resume-user-name">@{user.nickName}</p>
      </div>
    </Fragment>
  );
};

export default UserResume;
