import React, { useEffect, useState } from "react";
import { useNav } from "../../contexts/nav-context";
import CommentsPage from "../../pages/CommentsPage/CommentsPage";
import "./Content.css";

export default function Content() {
  const { currentPage } = useNav();
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(() => {
      switch (currentPage) {
        case "Comments":
          return <CommentsPage />;
        default:
          return <h2>{currentPage}</h2>;
      }
    });
  }, [currentPage]);

  return <div className="Content">{content}</div>;
}
