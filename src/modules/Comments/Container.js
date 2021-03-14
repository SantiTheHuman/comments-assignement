import React, { useEffect, useState } from "react";
import { getCommentsData } from "./api/comments-api";
import "./Container.css";
import Pagination from "./components/Pagination";
import CommentsGrid from "./components/CommentsGrid";
import CommentModal from "./components/CommentModal";

export default function CommentsModule() {
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
    <div className="Container">
      <div className="comments-header">
        <h1>Comments</h1>
        <button onClick={() => console.log(commentsPage)}>
          Create comment
        </button>
      </div>
      <CommentsGrid
        comments={comments}
        setSelectedComment={setSelectedComment}
      />
      <CommentModal props={{ selectedComment, setSelectedComment }} />
      <Pagination props={{ commentsPage, setCommentsPage }} />
    </div>
  );
}
