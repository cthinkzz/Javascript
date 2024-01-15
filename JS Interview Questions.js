/** 1. what's the output of below code snippet and explain the reason for the same **/
function callMe1() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

callMe1();

/** 2. guess the output and suggest how can I reverse the result. Ex: if the output is true, how can I make it false and vice versa **/
function callMe2(item) {
  item.modified = true;
}
let item = {
  modified: false,
};
let temp = item;
callMe2(temp);
console.log('isModified ', item.modified);

/** 3. guess the output of below function */
function callMe3() {
  setTimeout(() => console.log('First'), 0);
  setTimeout(() => console.log('Second'));
  console.log('Third');
  Promise.resolve('Fourth').then((resp) => console.log(resp));
}
callMe3();

/**  4. call below callMe4 function using both Promise as well as async/await syntax */
function callMe4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolved'));
  });
}

function callingUsingPromise() {
  //write your code here
}

function callsingAsyncAwait() {
  //write your code here
}

callingUsingPromise();
callsingAsyncAwait();

/** 5. what are iterables? Can you write code to convert a normal object into iterable? */

let myobject = {
  //add your code here
};

// for (let value of myobject) {
//   console.log(value);
// }
