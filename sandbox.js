// Create an HTTP request
const request = new XMLHttpRequest();

// fires everytime there is a state change in the request (when something changes in the request)
request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  // readyState = 4 is means the request is complete
  if (request.readyState === 4 && request.status === 200) {
    // responseText is a json object that is returned
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log('could not fetch the data');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
request.send();
