// Write a function that takes a string as input and returns the longest word in it.
// e.g  You have successfully logged out.
// Output: successfully

function splitWords(str) {
  const splitArray = str.split(' ');
  let max = '';
  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i].length > max.length) {
      max = splitArray[i];
    }
  }
  return max;
}
console.log(splitWords('You have successfully logged out'));
