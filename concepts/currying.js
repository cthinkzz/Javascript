function multiply(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

const multByTwo = multiply(2);
console.log(multByTwo(3)(4));

const obj = {
  name: 'Chandu',
  age: 25,
};
function getDetails(age, height) {
  return this.name + ' ' + age + ' ' + height;
}

//polifyl for bind using call
function myBind(...args) {
  const functionName = this;
  const context = args[0];
  const args1 = args.slice(1);
  // console.log("restArgs",restArgs)
  return function (...args2) {
    // console.log("args2",args2)
    return functionName.apply(context, [...args1, ...args2]);
  };
}
Function.prototype.myBind = myBind;

console.log(getDetails.call(obj, 25, 5.6));
const usingBind = getDetails.bind(obj);
console.log(usingBind(26, 5.6));
const usingBind2 = getDetails.bind(obj, 26);
console.log(usingBind2(5.7));
const usingMyBind = getDetails.myBind(obj, 26);
console.log(usingMyBind(5.6));
const usingMyBind2 = getDetails.myBind(obj, 26);
console.log(usingMyBind2(5.7));
const usingMyBind3 = getDetails.myBind(obj);
console.log(usingMyBind3(26, 5.8));
