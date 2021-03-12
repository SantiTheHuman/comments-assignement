export const getCommentsData = (startNumber) => {
  fetch(
    `http://jsonplaceholder.typicode.com/comments?_start=${startNumber}&_limit=12&_sort=id&_order=desc`
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
};
