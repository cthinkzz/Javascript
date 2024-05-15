const str = 'i ekil siht margorp yrev hcum';
let outp = '';
let word = '';

// Function to reverse a string
const reverseString = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str.charAt(i);
  }
  return reversed;
};

for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) !== ' ') {
    word += str.charAt(i);
  } else {
    // Reverse the word
    outp += reverseString(word) + ' ';
    word = '';
  }
}

// Reverse the last word
outp += reverseString(word);

console.log(outp);
