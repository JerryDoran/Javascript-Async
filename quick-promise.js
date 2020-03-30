// Create basic promise for record video
// const recordVideoPromise = new Promise((resolve, reject) => {
//   setInterval(() => {
//     // resolve will be called when successful and need a .then()
//     // resolve('Video Recorded!');

//     // reject will be called when not successful but will need a .catch()
//     reject('Video Record Failed!!!');
//   }, 1000);
// });

// recordVideoPromise
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log(err));

// Set timeout as a promise
// const setTimeoutPromise = num => {
//   return new Promise((resolve, reject) => {
//     if (num <= 0) {
//       reject('Error: I am done!');
//     }
//     setTimeout(() => {
//       resolve(num - 1);
//     }, 1000);
//   });
// };
// setTimeoutPromise(3)
//   .then(res => {
//     console.log(res);
//     return setTimeoutPromise(res);
//   })
//   .then(res => {
//     console.log(res);
//     return setTimeoutPromise(res);
//   })
//   .then(res => {
//     console.log(res);
//     return setTimeoutPromise(res);
//   })
//   .catch(err => console.log(err));

// Cooking multiple items for dinner
const hamburgerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Burgers are done');
  }, 3000);
});

const hotdogPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hotdogs are done');
  }, 5000);
});

const saladPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Salad is done');
  }, 10000);
});

// hamburgerPromise
//   .then(res => {
//     console.log('Hehe' + res);
//     return hotdogPromise;
//   })
//   .then(res => {
//     console.log(res);
//     return saladPromise;
//   })
//   .then(res => {
//     console.log(res);
//   });

Promise.all([hamburgerPromise, hotdogPromise, saladPromise]).then(responses => {
  responses.forEach(res => console.log(res));
});
