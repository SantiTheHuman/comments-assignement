import React from "react";
import { updateComment } from "../api/comments-api";
import "../styles/UpdateForm.css";

export default function UpdateForm({ comment, setModalContent }) {
  const { name, email, body } = comment;

  const handleForm = (e) => {
    e.preventDefault();
    updateComment(comment).then((res) =>
      setModalContent(
        res ? (
          <h2 className="result-message">Comment updated</h2>
        ) : (
          <h2 className="result-message">Error</h2>
        )
      )
    );
  };

  return (
    <form className="UpdateForm" onSubmit={(e) => handleForm(e)}>
      <label htmlFor="name">Name:</label>
      <input name="name" type="text" defaultValue={name}></input>
      <label htmlFor="email">E-mail:</label>
      <input name="email" type="text" defaultValue={email}></input>
      <label htmlFor="content">Content:</label>
      <textarea name="content" defaultValue={body}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
