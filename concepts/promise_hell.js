const createOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1111');
    }, 2000);
  });

const makePayment = (orderId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('10010');
    }, 1000);
  });

const placeOrder = (orderId, paymentRef) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('failed');
    }, 1000);
  });

//callback hell (no catch inside)
createOrder()
  .then((orderId) => {
    makePayment().then((paymentRef) => {
      //can access both orderId, paymentRef
      placeOrder(orderId, paymentRef).then((resp) => {
        console.log(resp);
      });
      // .catch((err) => console.log("Caught here"));
    });
  })
  .catch((err) => console.log('Not caught here'));
