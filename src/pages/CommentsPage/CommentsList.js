import React from "react";
import "./CommentsList.css";

export default function CommentsList({ comments }) {
  return (
    <ul className="CommentsList">
      {comments &&
        comments.map((comment, index) => (
          <li key={index} className={`c-${index + 1}`}>
            <div className="comment-top">
              <h2>{comment.name}</h2>
              <h3>{comment.email}</h3>
            </div>
            <div className="comment-content">{comment.body}</div>
          </li>
        ))}
    </ul>
  );
}
