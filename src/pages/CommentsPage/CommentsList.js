import React from "react";

export default function Comments({ comments }) {
  return (
    <ul className="Comments">
      {comments &&
        comments.map((comment, index) => (
          <li key={index} className={`c-${index + 1}`}>
            <div className="comment-top">
              <h2>{comment.name}</h2>
              <h3>{comment.id}</h3>
            </div>
            <div className="comment-content">{comment.body}</div>
          </li>
        ))}
    </ul>
  );
}
