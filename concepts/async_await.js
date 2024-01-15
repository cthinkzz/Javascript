const createOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(12345), 10000);
  });

const makePayment = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('successfull'), 5000);
  });

async function callApi() {
  const orderId = await createOrder();
  console.log('orderId', orderId);

  const payment = await makePayment();
  // NO, IT WAS NOT CALLED immediately Seconds, IT IS CALLED AFTER 5 more Seconds
  console.log('payment status was ' + payment);
}

callApi();
