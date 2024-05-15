const arr = [
  [10, 12, 15],
  [12, 16, 18],
  [8, 6, 10],
  [13, 15, 16, 7],
];

// op:  [true, false, true, false] (if num < 10 exists in the array)

const isNumExist = (arr) => {
  for (let item of arr) {
    if (item <= 10) {
      return true;
    }
  }

  return false;
};

const reduceArr = (arr) => {
  const temp = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      temp.push(isNumExist(item));
    }
  }
  return temp;
};

console.log(reduceArr(arr));
