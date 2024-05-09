const checkSubstring = (x, y) => {
  const yLen = y.length;
  let found = false;
  for (let i = 0; i < x.length; i++) {
    let j = 0;
    let k = i;
    while (j < yLen) {
      if (x[k] === y[j]) {
        j++;
        k++;
      } else {
        break;
      }
    }
    if (j === yLen) {
      found = true;
      break;
    }
  }
  console.log('found', found);
};
checkSubstring('abbcba', 'bbcba');
