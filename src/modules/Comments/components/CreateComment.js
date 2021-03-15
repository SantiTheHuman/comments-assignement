import React, { useRef } from "react";
import { createComment } from "../api/comments-api";
import SelectedComment from "./SelectedComment";
import "../styles/CreateComment.css";

export default function CreateComment({ setModalContent }) {
  const formRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();

    const newComment = {
      name: formRef.current["name"].value,
      email: formRef.current["email"].value,
      body: formRef.current["content"].value,
    };

    createComment(newComment).then((res) =>
      setModalContent(
        res ? (
          <>
            <h2 className="result-message">Comment created</h2>
            <SelectedComment
              comment={newComment}
              setModalContent={setModalContent}
            />
          </>
        ) : (
          <h2 className="result-message">Error</h2>
        )
      )
    );
  };

  return (
    <form
      className="CreateComment"
      ref={formRef}
      onSubmit={(e) => handleForm(e)}
    >
      <label htmlFor="name">Name:</label>
      <input name="name" type="text"></input>
      <label htmlFor="email">E-mail:</label>
      <input name="email" type="text"></input>
      <label htmlFor="content">Content:</label>
      <textarea name="content"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
