import React, { useEffect, useState } from "react";
import { getCommentsData } from "../../services/comments-api";
import "./Comments.css";
import Pagination from "./Pagination";
import CommentsList from "./CommentsGrid";

export default function Comments() {
  const [commentsPage, setCommentsPage] = useState(1);
  const [comments, setComments] = useState(null);
  const [selectedComment, setSelectedComment] = useState(null);

  const displayComments = async (startNumber) => {
    const commentsData = await getCommentsData(
      startNumber === 1 ? 0 : (startNumber - 1) * 12
    );
    setComments(commentsData);
  };

  useEffect(() => {
    displayComments(commentsPage);
  }, [commentsPage]);

  return (
    <div className="Comments">
      <div className="comments-header">
        <h1>Comments</h1>
        <button onClick={() => console.log(commentsPage)}>
          Create comment
        </button>
      </div>
      <CommentsList
        comments={comments}
        setSelectedComment={setSelectedComment}
      />
      <div
        className={`modal ${selectedComment ? "open-modal" : "hidden-modal"}`}
        onClick={() => setSelectedComment(null)}
      >
        {selectedComment && (
          <div className="modal-comment">
            <div className="comment-top">
              <h2>{selectedComment.name}</h2>
              <h3>{selectedComment.email}</h3>
            </div>
            <div className="comment-content">{selectedComment.body}</div>
            <ul className="comment-options">
              <li>Respond</li>
              <li>Update</li>
              <li>Delete</li>
            </ul>
          </div>
        )}
      </div>
      <Pagination props={{ commentsPage, setCommentsPage }} />
    </div>
  );
}
