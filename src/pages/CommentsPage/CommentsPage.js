import React, { useState, useEffect } from "react";
import { getCommentsData } from "../../services/comments-data";
import "./CommentsPage.css";

export default function CommentsPage() {
  const [comments, setComments] = useState();

  const displayComments = async (startNumber) => {
    const commentsData = await getCommentsData(startNumber);

    setComments(commentsData);
  };

  useEffect(() => {
    displayComments(0);
  }, []);

  return (
    <div className="CommentsPage">
      <div className="comments-header">
        <h1>Comments</h1>
        <button onClick={() => console.log(comments)}>Create comment</button>
      </div>
      <ul className="comments-list">
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
      <div className="comments-bottom"></div>
    </div>
  );
}
