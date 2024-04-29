const input = [1, [4, 6, [8, 3, [9, 10]]], [11, 12], 2];
// const output = [2, 6, 12, 8, 10];
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

const getMaxOutOfArray = (arr) => {
  let maxValues = [];

  const findMax = (arr) => {
    let max = -Infinity;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        findMax(item);
      } else {
        max = Math.max(max, item);
      }
    });
    maxValues.push(max);
  };

  findMax(arr);
  return maxValues;
};

const out = getMaxOutOfArray(input);
console.log(out); // Output: [2, 6, 12, 8, 10]
