var x = 2;
var add = function () {
  x = 5;
  var y = 1;
  var sum;
  return function () {
    setTimeout(() => {
      return x + y;
    }, 0);
  };
};
add();

//ans
var x = 2;
var add = function () {
  x = 5;
  var y = 1;
  var sum;
  return function (callback) {
    setTimeout(() => {
      callback(x + y);
    }, 0);
  };
};

add()(function (sum) {
  console.log(sum);
});
