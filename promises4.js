window.onload = function() {
  function get(url) {
    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();
      xhttp.open('GET', url, true);
      xhttp.onload = () => {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };
      xhttp.onerror = () => {
        reject(xhttp.statusText);
      };
      xhttp.send();
    });
  }

  // This is returned back to us immediately from the function above before any
  // data us retrieved
  let promise = get('data/tweets.json');

  promise
    .then(tweets => {
      console.log(tweets);
      return get('data/friends.json').then(friends => {
        console.log(friends);
        return get('data/videos.json').then(videos => {
          console.log(videos);
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
};
