const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('resolved'), 2000);
});
promise.PromiseResult = 'hello';
console.log(promise); // we can't modify [[PromiseResult]], above one just adds normal attirbute

const promise2 = new Promise((resolve, reject) => {
  reject('rejecting');
});
console.log(promise2);

const promise3 = new Promise((resolve, reject) => {
  //not doing resolve or reject
});
console.log(promise3); //will stay in pending state

//Promise chaining
const createOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ orderId: 12345 });
    //once resolved/rejected further resolve/reject will be ignored
    resolve({ orderId: 54321 });
    reject('rejecting');
  }, 1000);
});
const makePayment = (orderId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('payment successfull for ' + orderId);
    }, 1000);
  });
createOrder
  .then((resp) => {
    return makePayment(resp.orderId); // have to return, else undefined will be returned
  })
  .catch((e) => {
    console.log('not called');
  })
  .then((resp) => {
    console.log(resp);
  })
  .catch((e) => console.log(e.message));

//Promise chaining-2
const createOrder2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejecting');
  }, 2000);
});
const makePayment2 = (orderId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('payment successfull for ');
    }, 2000);
  });
createOrder2
  .then((resp) => {
    return makePayment2(resp.orderId);
  })
  .catch((e) => {
    console.log('catch is called');
  })
  .then((resp) => {
    console.log('then is called');
  })
  .catch((e) => console.log(e.message));

//Promise chaining-3
const createOrder3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejecting');
  }, 3000);
});
const makePayment3 = (orderId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('payment successfull for ' + orderId);
    }, 3000);
  });
createOrder3
  .then((resp) => {
    return makePayment3(resp.orderId);
  })
  .then((resp) => {
    console.log('then is not called');
  })
  .catch((e) => console.log('catch is called'))
  .then((resp) =>
    console.log('last then is always called as error is caught above')
  )
  .finally(() => {
    console.log('finally is also called in any case, it accepts no arguments');
  });

//Promise chaining-4 (Promise Hell)
const createOrder4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ orderId: 12345 });
  }, 4000);
});
const makePayment4 = (orderId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('payment successfull for ' + orderId);
    });
  });
const showOrderDetails = () => {
  return new Promise((resolve, reject) => {
    // resolve('Order placed succesfully');
    reject('Error in hell');
  });
};

createOrder4
  .then((resp) => {
    // promise hell
    makePayment4(resp.orderId).then((resp) => {
      console.log(resp);
      showOrderDetails().then((resp) => {
        console.log(resp);
      });
      // .catch((err) => {
      //   console.log('if error is not caught inside, it will be not be caught on outside catch');
      //   console.log(err);
      // });
    });
  })
  .catch((err) => {
    console.log('error is not caught here, should be handled inside only');
    console.log(err);
  });

//Promise chaining-5 (No Error handling in between)
const createOrder5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  }, 5000);
});
createOrder5
  .then((resp) => {
    console.log('this is not called');
    return makePayment4(resp.orderId);
  })
  .then((resp) => {
    console.log('this is not called');
    return showOrderDetails();
  })
  .then((resp) => {
    console.log('this is not called');
  })
  .catch((err) => {
    console.log(
      'if error occured at beginning itself, then previous thens wont be executed if there is only one catch statement'
    );
  });

//anything returned from catch is transferred to immedeate .then
new Promise((resolve, reject) => {
  reject('rejected');
})
  .catch((err) => {
    console.log(err);
    return 'resolved from catch';
  })
  .then((resp) => console.log(resp));
