import React from "react";
import { updateComment } from "../api/comments-api";

export default function UpdateForm({ comment, setResult }) {
  const { name, email, body } = comment;

  const handleForm = (e) => {
    e.preventDefault();
    updateComment(comment).then((res) =>
      res ? setResult(<h2>Comment updated</h2>) : <h2>Error</h2>
    );
  };

  return (
    <form onSubmit={(e) => handleForm(e)}>
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
