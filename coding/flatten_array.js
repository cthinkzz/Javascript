var arr = [1, [2, [3, 4], 3, 4], 5, 6, [7, 8, 9]];
// output [1,2,3,4,3,4,5,6,7,8,9]

const reduceArray = (arr) => {
  const temp = [];

  const flattenSubArrays = (arr) => {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flattenSubArrays(item);
      } else {
        temp.push(item);
      }
    });
  };
  flattenSubArrays(arr);
  return temp;
};

const temp = reduceArray(arr);
console.log(temp);
