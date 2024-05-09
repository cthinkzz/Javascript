const maximumSubstring = () => {
  const len = str.length;
  let maxString = '';
  for (let i = 0; i < len - 1; i++) {
    let substr = str[i];
    const charSet = { [substr]: true };
    for (let j = i + 1; j < len; j++) {
      if (charSet[str[j]]) {
        break;
      } else {
        substr = substr + str[j];
        charSet[str[j]] = true;
      }
    }
    if (maxString.length < substr.length) {
      maxString = substr;
    }
  }

  console.log('Maximum non repitative substring is ', maxString);
};

maximumSubstring('abcdeapq');

//ChatGPT
function maxLengthNonRepetitiveSubstring(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1;
    }

    charIndexMap[currentChar] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
const inputString = 'abcdeapq';
console.log(maxLengthNonRepetitiveSubstring(inputString)); // Output: 7
