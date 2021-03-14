import React, { useState, useEffect } from "react";
import "./CommentModal.css";
import { deleteComment } from "../api/comments-api";
import UpdateForm from "./UpdateForm";
import CloseIconSVG from "../assets/CloseIconSVG";

export default function CommentModal({ props }) {
  const { selectedComment, setSelectedComment } = props;
  const [result, setResult] = useState(null);

  // useEffect(() => {
  //   result &&
  //     setTimeout(() => {
  //       setSelectedComment(null);
  //       setResult(null);
  //     }, 4000);
  // }, [result]);

  const openUpdateForm = (comment) => {
    setResult(<UpdateForm comment={selectedComment} setResult={setResult} />);
  };

  return (
    <div className={`modal ${selectedComment ? "open-modal" : "hidden-modal"}`}>
      <button
        className="close-modal"
        onClick={() => {
          setSelectedComment(null);
          setResult(null);
        }}
      >
        <CloseIconSVG />
      </button>
      {!result && selectedComment && (
        <div className="modal-comment">
          <div className="comment-top">
            <h2>{selectedComment.name}</h2>
            <h3>{selectedComment.email}</h3>
          </div>
          <div className="comment-content">{selectedComment.body}</div>
          <ul className="comment-options">
            <li onClick={() => openUpdateForm(selectedComment)}>Update</li>
            <li
              onClick={() =>
                deleteComment(selectedComment.id).then(
                  (res) => res && setResult(<h2>Message deleted</h2>)
                )
              }
            >
              Delete
            </li>
          </ul>
        </div>
      )}
      {result && <div className="result-window">{result}</div>}
    </div>
  );
}
