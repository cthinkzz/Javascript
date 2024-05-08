// not handled promises can be tracked using unhandledrejection
(function () {
  return new Promise((resolve, reject) => {
    reject('rejected-1');
  });
})().then((resp) => console.log(resp));

(() =>
  new Promise((resolve, reject) => {
    reject('rejected-2');
  }))().then((resp) => console.log(resp));

window.addEventListener('unhandledrejection', (err) => {
  console.log('not handled rejections', err.reason);
});

//setTimeout behavior with reject and throw
new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject('Whoops!');
  }, 1000);
}).catch((err) => {
  console.log('caught here!! ', err);
});

new Promise(function (resolve, reject) {
  throw new Error('Whoops-2!');
}).catch((err) => {
  console.log('caught here!! ', err);
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops-3!');
  });
}).catch((err) => {
  console.log('not caught here!! ', err);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error('Whoops-4');
  }, 1000);
}).catch((err) => {
  console.log('not caught here!!');
});

new Promise(function (resolve, reject) {
  resolve('resolved');
})
  .then(() => {
    setTimeout(() => {
      throw new Error('Whoops-5');
    });
  })
  .catch((err) => {
    console.log('not caught here!! ', err);
  });

new Promise(function (resolve, reject) {
  resolve('resolved');
})
  .then(() => {
    throw new Error('Whoops-6');
  })
  .catch((err) => {
    console.log('caught here!! ', err);
  });

//microtask queue
setTimeout(() => {
  console.log('written first but executed later');
});

new Promise((resolve, reject) => {
  resolve('resolved firts than setTimeout');
}).then((resp) => console.log(resp)); //this prints first
