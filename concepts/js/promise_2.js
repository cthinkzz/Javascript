const myPromise = () =>
  new Promise((resolve, reject) => resolve('resolved immediately'));

console.log('Before Promise');
myPromise().then((resp) => console.log(resp)); //even though it resolves immediately, the console.log below is printed first
console.log('After Promise');

//finally
const myPromise2 = () =>
  new Promise((resolve, reject) => resolve('inside promise'));

myPromise2()
  .finally(() => console.log('finally'))
  .then((resp) => console.log(resp))
  .finally(() => console.log('finally-2')); //we can have as many finally we want, and the o/p appears in the order of the code written

//error handling using .then itself
const myPromise3 = () => new Promise((resolve, reject) => reject('rejecting'));
myPromise3().then(
  (resp) => console.log('resolved ', resp),
  (err) => console.log('rejected', err)
); //.then's second argument catches error
//!! Its second function, not second argument, like (resp,err) callbacks, it is (resp & err) //two seperate functions

//whatever returned in final is not passed to next handler, but if we throw error, that will be caught in next .catch
const callMe = () =>
  new Promise((resolve, reject) => {
    resolve('from promise');
  });

callMe()
  .finally(() => 'hehe')
  .then((resp) => console.log(resp)) //hehe is not passed here
  .finally(() => {
    throw new Error('error from final');
  })
  .catch((errr) => console.log('caught here ', errr));

//anything returned from .then is returned as promise, that's why we are able to do promise chaining
(function () {
  return new Promise((resolve, reject) => {
    resolve('resolved');
  });
})()
  .then((resp) => {
    console.log(resp);
    return 'normal string';
  })
  .then((resp) => {
    console.log(resp);
    console.log(typeof resp); //type of resp is string!!
  });
