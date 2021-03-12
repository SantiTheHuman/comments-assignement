import React, { useState, useEffect } from "react";
import {
  getCommentsData,
  getNumberOfPages,
} from "../../services/comments-data";
import "./CommentsPage.css";

export default function CommentsPage() {
  const [comments, setComments] = useState();
  const [pagesList, setPagesList] = useState(0);

  const displayComments = async (startNumber) => {
    const commentsData = await getCommentsData(startNumber);

    setComments(commentsData);
  };

  const displayNumberOfPages = async () => {
    const number = await getNumberOfPages();
    let pages = [];
    for (let i = 0; i < number; i++) {
      pages.push(i);
    }
    setPagesList(pages);
  };

  useEffect(() => {
    displayComments(0);
    displayNumberOfPages();
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
      <ul className="comments-bottom">
        {pagesList &&
          pagesList.map((pageNum, index) => <li key={index}>{pageNum}</li>)}
      </ul>
    </div>
  );
}
