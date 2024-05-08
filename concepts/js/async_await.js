//async alway returns a promise
async function notPromiseReturning() {
  return 'not a promise';
}

console.log(notPromiseReturning()); // it is returned as a promise

//chaining
const createOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(12345), 4000);
  });

const makePayment = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('successfull');
    }, 1000);
  });

async function callApi() {
  console.log('First');
  const orderId = await createOrder(); //even though createOrder has 4000ms, it is called first and the consecative awaits wait for this to execute first
  console.log('orderId', orderId);
  console.log('Third');

  const payment = await makePayment();
  console.log('payment status was ' + payment);
  console.log('Fourth');
}

callApi();
console.log('Second');

//async await with reversed timer
const createOrder2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(12345), 5000);
  });

const makePayment2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('successfull');
    }, 6000);
  });

async function callApi2() {
  console.log('First');
  const orderId = await createOrder2();
  console.log('orderId', orderId);
  console.log('Third');

  const payment = await makePayment2(); //even though createOrder has 6000ms, it is called after 1second of the previous await execution. So the Promise was running behind? if yes how does engine know it had one more await .. NO, IT WAS NOT CALLED AFTER 1Sec, IT WAS CALLED AFTER 6Seconds
  console.log('payment status was ' + payment);
  console.log('Fourth');
}

callApi2();
console.log('Second');

//error handling
const createOrder3 = () =>
  new Promise((resolve, reject) => {
    reject('rejecting order');
  });

const callApi3 = async () => {
  try {
    await createOrder3();
  } catch (e) {
    console.log(e);
  }
};

callApi3();

//or we can directly catch error while calling function
const createOrder4 = () =>
  new Promise((resolve, reject) => {
    reject('rejecting order-2');
  });

const callApi4 = async () => {
  await createOrder4();
};

callApi4().catch((e) => console.log(e));

//we can;t await normal function, await shoudl be used infront of a promise
const normalFn = () => {
  setTimeout(() => {
    console.log('I am normal function');
  }, 1000);
  return 'a';
};

const awaitNormalFn = async () => {
  const result = await normalFn(); //'await' has no effect on the type of this expression.
};

//we can;t await inside normal function, await shoudl be used isnide async function
const asyncFn = async () => {
  setTimeout(() => {
    console.log('I am an async function');
  }, 1000);
  return 'a';
};

// const awaitInNormalFn =  () => {
//   const result = await normalFn(); //'await' expressions are only allowed within async functions and at the top levels of modules.
// };

//zero setTimeout example
const zeroSetTimeout = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log('Inside setTimeOut');
      resolve('Promise resolved');
    })
  );
};

const awaitForTimeOut = async () => {
  console.log('Beginning');
  const result = await zeroSetTimeout(); //eben though it is zerotimeout, it will wait unill promise is resolved
  console.log(result);
  console.log('End');
};

console.log('Calling awaitForTimeOut');
awaitForTimeOut();
console.log('Called awaitForTimeOut');

//no return inside then
const promise = new Promise((resolve, reject) => {
  resolve('resolved');
});
const promise2 = () =>
  new Promise((resolve, reject) => {
    console.log('its called');
    resolve('resolved');
  });

promise
  .then((resp) => {
    promise2(); // not returning, so undefined is returned
  })
  .then((resp) => {
    console.log(resp);
  });
