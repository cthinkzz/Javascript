function addEventListener() {
  var count = 0;

  document.getElementById('button').addEventListener('click', function abc() {
    count++;
    console.log('count', count);
  });
}
addEventListener();

//below ones doesn't work
// document.getElementById('button').addEventListener('click', function () {
//   var count = 0; // on every click its assigned to 0, seems like new variable creates for every onClick function
//   function increment() {
//     count++;
//     console.log('count', count);
//   }
//   increment();
// });

/*document.getElementById('button').addEventListener('click', function () {
  var count = 0;
  function increment() {
    count++;
    console.log('count', count);
  }
  return increment;
});*/

function a() {
  function b() {
    console.log(abc); //no error, even though its let, because function b is executed later
  }
  // b(); if we do this, then its error Cannot access 'abc' before initialization
  let abc = 10; // above works for var abc, but shows undefined instead
  return b;
}

// a()();

let outerVar = 100;
function outerFn() {
  let innerVar = 10;
  return function () {
    console.log('outer', outerVar); //no closure
    console.log('inner', innerVar); //closure
  };
}

outerFn()();
