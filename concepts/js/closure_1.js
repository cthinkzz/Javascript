function outer() {
  var a = 10;
  function inner() {
    console.log('hello a', a);
  }
  inner(); //doesn't need to return function, even this also forms closure
}

// outer();

function z() {
  let b = 100;
  function x() {
    let a = 10;
    function y() {
      console.log(a, b);
    }
    b = 200;
    return y;
  }
  const m = x();
  return m;
  // return x(); same as above
}

const m = z();
// m();

function forLoop1() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// forLoop1();

function forLoop2() {
  // function innerSetTimeOut(obj) {
  //   setTimeout(function () {
  //     console.log(obj.i);   //o/p 6,6,6,6,6 because its pass by reference here
  //   }, obj.i * 1000);
  // }
  // for (var obj = { i: 1 }; obj.i <= 5; obj.i++) {
  //   innerSetTimeOut(obj);
  // }
  function innerSetTimeOut(i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  for (var i = 1; i <= 5; i++) {
    innerSetTimeOut(i);
  }
}
forLoop2();

function forLoop3() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); //Block: 1,2,3,4,5 i has been block scoped, no concept of closure!!
    }, i * 1000);
  }
}
// forLoop3();
// forLoop3 behaves same as forLoop4
function forLoop4() {
  {
    let i = 1;
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
// forLoop4();

function forLoop5() {
  let i = 1;
  setTimeout(function () {
    console.log(i); //no block scoped! closure is created here
  }, i * 1000);
}
// forLoop5();

let noClosure = 10;
setTimeout(() => {
  // debugger;
  // NO CLOSURE as its not inside any function
  noClosure = 20;
}, 1000);
setTimeout(() => {
  // debugger;
  // NO CLOSURE as its not inside any function, BUT REFERENCE TO A SAME SCRIPT VARIABLE
  console.log('noClosure', noClosure);
}, 2000);
