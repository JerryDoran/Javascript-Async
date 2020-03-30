window.onload = function() {
  // Create a generator
  function* gen() {
    let x = yield 10;
    console.log(x);
  }

  let myGen = gen();
  console.log(myGen.next());
  console.log(myGen.next(10));
};
