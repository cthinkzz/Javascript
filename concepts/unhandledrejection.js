//see console!!

(function () {
  return new Promise((resolve, reject) => {
    reject('rejected-1');
  });
})();

(() =>
  new Promise((resolve, reject) => {
    throw new Error('Error-1');
  }))().then((resp) => console.log(resp));

Promise.reject(new Error('Error-2'));

window.addEventListener('unhandledrejection', (err) => {
  console.log('not handled promises can be observed here', err);
});
