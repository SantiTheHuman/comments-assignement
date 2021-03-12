export const getCommentsData = async (startNumber) => {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/comments?_start=${startNumber}&_limit=12&_sort=id&_order=desc`
  );
  const comments = await response.json();
  return comments;
};
