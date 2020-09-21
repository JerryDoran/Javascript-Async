const getTodos = (resource) => {
  // return new Promise
  return new Promise((resolve, reject) => {
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
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log('could not fetch the data');
        reject('error getting resource');
      }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', resource);
    request.send();
  });
};

console.log(1);
console.log(2);

getTodos('data/todos/luigi.json')
  .then((data) => {
    console.log('promise resolved', data);
  })
  .catch((err) => console.log('promise rejected:', err));

// promise example - 'resolve' and 'reject' are built into the Promise API.
const getSomething = () => {
  return new Promise((resolve, reject) => {
    // do network request - fetch data
    resolve('fetched data successfully');
    // reject('some error occured');
  });
};

// we will get the promise back after this function is called.  We can then tack on a .then()
// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

console.log(3);
console.log(4);
