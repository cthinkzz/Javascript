//guess the o/p
let promise1 = Promise.resolve();
let promise2 = Promise.resolve();

promise1.then(() => console.log(1)).then(() => console.log(2));
promise2.then(() => console.log(3)).then(() => console.log(4));

//guess the o/p
console.log('hello');
setTimeout(() => {
  console.log('setTimeout');
});
queueMicrotask(() => console.log('queueMicrotask-1'));
Promise.resolve('Promise').then((resp) => console.log(resp));
queueMicrotask(() => console.log('queueMicrotask-2'));
