function fetchData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

export { fetchData };
