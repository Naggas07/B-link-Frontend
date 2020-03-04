import React from "react";
const Comments = ({ comment }) => {
  let convert = date => {
    let newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth() +
      1}/${newDate.getFullYear()}  ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`;
  };

  return (
    <div className="container item-comment">
      <div className="avatar-container">
        <img src={comment.user.avatar} alt="imagen" />
      </div>
      <div className="message-container">
        <p>{comment.message}</p>
        <p className="comment-author">{`@${comment.user.name} - ${convert(
          comment.createdAt
        )}`}</p>
      </div>
    </div>
  );
};

export default Comments;
