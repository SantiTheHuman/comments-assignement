import React from "react";
import "../styles/CommentsGrid.css";
import SelectedComment from "./SelectedComment";

export default function CommentsGrid({ comments, setModalContent }) {
  return (
    <ul className="CommentsGrid">
      {comments &&
        comments.map((comment, index) => (
          <li
            key={index}
            className={`c-${index + 1}`}
            onClick={() => {
              setModalContent(
                <SelectedComment
                  comment={comment}
                  setModalContent={setModalContent}
                />
              );
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
