//spread operator over the array iterates throguh each element and returns them
let arr = [1, 2, 3];
console.log(arr); // this prints it as array
console.log(...arr); // this prints individual elements, because spread operator returns individual elements

//that is why we are able to concat two arrays using spread operator, notice that we wrap two array inside array again, because we want to return array of elements returned by two spread operators
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const updated = [...arr1, ...arr2];
console.log('updated', updated);
