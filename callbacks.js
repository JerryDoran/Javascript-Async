/*jshint esversion: 6 */

// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post two'}
// ];

// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach((post, index) => {
//       output += `<li>${post.title} at index ${index}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);

// can also use ES6 version with arrow function
// setTimeout(() => {
//
//}, 1000)
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: 'Post Three', body: 'This is post three'}, getPosts);

window.onload = function() {
  let fruits = ["banana", "apple", "pear"];

  // Set up as synchronous callback function
  // fruits.forEach(fruit => {
  //   console.log(fruit);
  // });
  // console.log("Done!");

  // Set up asynchronous callback function
  // $.get("data/tweets.json", data => {
  //   console.log(data);
  // });
  // console.log("Done!");

  // Callback Hell Example!!!
  // $.ajax({
  //   type: "GET",
  //   url: "data/tweets.json",
  //   success: data => {
  //     console.log(data);
  //     $.ajax({
  //       type: "GET",
  //       url: "data/friends.json",
  //       success: data => {
  //         console.log(data);
  //         $.ajax({
  //           type: "GET",
  //           url: "data/videos.json",
  //           success: data => {
  //             console.log(data);
  //           },
  //           error: (jqXHR, textStatus, error) => {
  //             console.log(error);
  //           }
  //         });
  //       },
  //       error: (jqXHR, textStatus, error) => {
  //         console.log(error);
  //       }
  //     });
  //   },
  //   error: (jqXHR, textStatus, error) => {
  //     console.log(error);
  //   }
  // });

  // Much better way to do the above example

  function handleError(jqXHR, textStatus, error) {
    console.log(error);
  }
  $.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error: handleError
  });

  function cbTweets(data) {
    console.log(data);
    $.ajax({
      type: "GET",
      url: "data/friends.json",
      success: cbFriends,
      error: handleError
    });
  }

  function cbFriends(data) {
    console.log(data);
    $.ajax({
      type: "GET",
      url: "data/videos.json",
      success: data => {
        console.log(data);
      },
      error: handleError
    });
  }
};
