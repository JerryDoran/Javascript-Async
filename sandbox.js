const getTodos = (callback) => {
  // Create an HTTP request
  const request = new XMLHttpRequest();

  // fires everytime there is a state change in the request (when something changes in the request)
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    // readyState = 4 is means the request is complete
    if (request.readyState === 4 && request.status === 200) {
      // responseText is a json object that is returned
      // console.log(request, request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // console.log('could not fetch the data');
      callback('could not fetch data', undefined);
    }
  });

  // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.open('GET', 'data/todos.json');
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log('callback fired!');
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);
