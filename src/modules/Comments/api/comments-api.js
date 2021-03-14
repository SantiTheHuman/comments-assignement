export const getCommentsData = async (startNumber) => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments?_start=${startNumber}&_limit=12&_sort=id&_order=desc`
  );
  const comments = await response.json();
  return comments;
};

export const getNumberOfPages = async () => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments?_start=0&_limit=1&_sort=id&_order=desc`
  );
  const newestMessage = await response.json();
  const numOfMessages = await newestMessage[0].id;
  const numOfPages = Math.ceil(numOfMessages / 12);
  return numOfPages;
};

export const createComment = async (data) => {
  const { commentId, name, email, body } = data;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments/${commentId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: commentId,
        name: name,
        email: email,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((res) => res.json());
  return response;
};

export const deleteComment = async (commentId) => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments/${commentId}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((res) => res.json());
  return response;
};

export const updateComment = async (data) => {
  const { id, name, email, body } = data;
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((res) => res.json());
  return response;
};
