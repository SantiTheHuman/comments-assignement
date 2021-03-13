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
