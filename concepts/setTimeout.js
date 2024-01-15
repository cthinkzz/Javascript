const timerId = setTimeout(() => {
  console.log('After 1 second', timerId);
}, 1000);
console.log('timerId before execution ', timerId);

setTimeout(() => {
  // trying to see what timerId is after execution of setTimeout
  console.log('timerId after execution ', timerId);

  //afer clearing timerId
  clearTimeout(timerId);
  console.log('timerId after clearing', timerId);
}, 2000);
