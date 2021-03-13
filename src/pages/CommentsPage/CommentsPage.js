import React, { useEffect } from "react";
import { getCommentsData } from "../../services/comments-api";
import { useComments } from "../../contexts/comments-context";
import "./CommentsPage.css";
import Pagination from "./Pagination";
import CommentsList from "./CommentsList";

export default function CommentsPage() {
  const { comments, setComments, commentsPage } = useComments();

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
    <div className="CommentsPage">
      <div className="comments-header">
        <h1>Comments</h1>
        <button onClick={() => console.log(commentsPage)}>
          Create comment
        </button>
      </div>
      <CommentsList comments={comments} />
      <Pagination />
    </div>
  );
}
