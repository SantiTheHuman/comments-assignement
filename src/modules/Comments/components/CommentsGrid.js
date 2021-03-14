import React from "react";
import "./CommentsGrid.css";

export default function CommentsGrid({ comments, setSelectedComment }) {
  return (
    <ul className="CommentsGrid">
      {comments &&
        comments.map((comment, index) => (
          <li
            key={index}
            className={`c-${index + 1}`}
            onClick={() => {
              setSelectedComment(comment);
            }}
          >
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
