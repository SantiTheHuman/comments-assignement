import React, { useState } from "react";

const CommentsContext = React.createContext();

function CommentsProvider({ children }) {
  const [comments, setComments] = useState([]);
  const [commentsPage, setCommentsPage] = useState(1);

  return (
    <CommentsContext.Provider
      value={{ comments, setComments, commentsPage, setCommentsPage }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

const useComments = () => React.useContext(CommentsContext);
export { CommentsProvider, useComments };
