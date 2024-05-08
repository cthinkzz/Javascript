function forLoop3() {
  let i = 0;
  for (i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); //Closure: 6,6,6,6,6 i has been closured instead of block scoped as its declared at function level
    }, i * 1000);
  }
}

// forLoop3();

function forLoop() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
forLoop();
//Explanation for above forLoop
//Above function is same as each iteration created in different block scopes shown bellow, the for loop creates a block scope of i with each iteration and they remember the block scoped variable
{
  let i = 1;
  setTimeout(function () {
    console.log(i); //no closure but block scoped
  }, i * 1000);
}

{
  let i = 2;
  setTimeout(function () {
    console.log(i); //no closure but block scoped
  }, i * 1000);
}
//.. same for i=3,4,5

function forLoopWitoutType() {
  for (i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); //no closure, no block scope and value is printed is 6,6,6,6,6
    }, i * 1000);
  }
}

// forLoopWitoutType();

function forLoopWitoutType2() {
  i = 0;
  for (i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i); //no closure, no block scope and value is printed is 6,6,6,6,6
    }, i * 1000);
  }
}

// forLoopWitoutType2();
