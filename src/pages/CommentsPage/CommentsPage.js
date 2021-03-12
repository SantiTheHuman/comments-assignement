import React from "react";
import { getCommentsData } from "../../services/comments-data";

export default function CommentsPage() {
  return (
    <div>
      <button onClick={() => getCommentsData(0)}>Get comments</button>
    </div>
  );
}
