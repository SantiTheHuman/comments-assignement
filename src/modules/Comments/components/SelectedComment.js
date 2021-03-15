import React from "react";
import { deleteComment } from "../api/comments-api";
import UpdateForm from "./UpdateForm";
import "../styles/SelectedComment.css";

export default function SelectedComment({ comment, setModalContent }) {
  return (
    <div className="SelectedComment">
      <div className="comment-top">
        <h2>{comment.name}</h2>
        <h3>{comment.email}</h3>
      </div>
      <div className="comment-content">{comment.body}</div>
      <ul className="comment-options">
        <li
          onClick={() =>
            setModalContent(
              <UpdateForm comment={comment} setModalContent={setModalContent} />
            )
          }
        >
          Update
        </li>
        <li
          onClick={() =>
            deleteComment(comment.id).then((res) =>
              setModalContent(
                res ? (
                  <h2 className="result-message">Comment deleted</h2>
                ) : (
                  <h2 className="result-message">Error</h2>
                )
              )
            )
          }
        >
          Delete
        </li>
      </ul>
    </div>
  );
}
