var arr = [1, [2, [3, 4], 3, 4], 5, 6, [7, 8, 9]];
// output [1,2,3,4,3,4,5,6,7,8,9]

const reduceArray = (arr, temp) => {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      reduceArray(item, temp);
    } else {
      temp.push(item);
    }
  });
  return temp;
};

const temp = [];
arr.forEach((item) => {
  if (Array.isArray(item)) {
    reduceArray(item, temp);
  } else {
    temp.push(item);
  }
});

console.log(temp);
