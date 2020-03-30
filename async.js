// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making Request to ${location}`);
//     if (location === 'Google') {
//       resolve('Google says hi');
//     } else {
//       reject('We can only talk to Google');
//     }
//   });
// }

// function processRequest(response) {
//   return new Promise((resolve, reject) => {
//     console.log('Processing response...');
//     resolve(`Extra Information + ${response}`);
//   });
// }

// makeRequest('Facebook')
//   .then(response => {
//     console.log('Response Received');
//     return processRequest(response);
//   })
//   .then(processedResponse => {
//     console.log(processedResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ASYNCHRONOUSLY
// async function doWork() {
//   try {
//     const response = await makeRequest('Twitter');
//     console.log('Response Received');

//     const processedResponse = await processRequest(response);
//     console.log(processedResponse);
//   } catch (error) {
//     console.log(error);
//   }
// }

// doWork();

/******* READY STATES
 * 0 - request not initialized
 * 1 - request has been set up
 * 2 - request has been sent
 * 3 - request in process
 * 4 - request is complete
 ******/

window.onload = function() {
  let http = new this.XMLHttpRequest();

  // Will log to the console every time there is a state change in the AJAX request
  http.onreadystatechange = function() {
    if (http.readyState === 4 && http.status === 200) {
      // console.log(JSON.parse(http.response));
    }
  };

  // Boolean argument is for if we want this method to be asynchronous or synchronous
  http.open("GET", "data/tweets.json", true);

  // No go out and grab the data.  This send() request is sent on a new thread outside
  // of the javascript and the rest of the code can be run after this.
  http.send();
  // console.log("test");
};

// JQUERY METHOD
$.get("data/tweets.json", data => {
  console.log(data);
});

console.log("test");
