import React, { useEffect, useState } from "react";
import { getCommentsData } from "../api/comments-api";
import CommentsGrid from "./CommentsGrid";
import CreateComment from "./CreateComment";
import Pagination from "./Pagination";
import Modal from "./Modal";
import "../styles/Container.css";

export default function Container() {
  const [comments, setComments] = useState(null);
  const [commentsPage, setCommentsPage] = useState(1);
  const [modalContent, setModalContent] = useState(null);

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
        <button
          onClick={() =>
            setModalContent(<CreateComment setModalContent={setModalContent} />)
          }
        >
          Create comment
        </button>
      </div>
      <CommentsGrid comments={comments} setModalContent={setModalContent} />
      <Modal props={{ modalContent, setModalContent }} />
      <Pagination props={{ commentsPage, setCommentsPage }} />
    </div>
  );
}
