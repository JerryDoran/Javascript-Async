const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title} at index ${index}</li> `;
    });
    document.body.innerHTML = output;
  }, 1000);

  // can also use ES6 version with arrow function
  // setTimeout(() => {
  //
  //}, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong!");
      }
    }, 2000);
  });
}

// createPost({ title: 'Post three', body: 'This is post three'}).then(getPosts).catch(err => console.log(err));

// ASYNC AWAIT
// async function init() {
//   await createPost({ title: 'Post three', body: 'This is post three'});
//
//   getPosts();
// }
//
// init();

async function fetchUsers() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();

// PROMISE.ALL
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, 'Goodbye'));
//
// const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json());
//
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
