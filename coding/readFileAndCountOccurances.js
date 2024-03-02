// Given a text file, write a program to read from the file and count number of duplicate words(ignore case sensitivity).
// Print the word & number of occurrences, sorted by number of occurences.
// Eg. File.txt contains “Lorem ipsum dolor sit Lorem, consectetur lorem Dolor.”
// Output
// Lorem 3
// Dolor 2
const fs = require('fs');

const sortByCount = (map) => {
  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  const map2 = new Map(arr);
  console.log(map2);
};

const countOccurances = (temp) => {
  let data = temp.replace(',', '');
  data = data.replace('.', '');
  const arr = data.split(' ');

  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const lowerCase = item.toLowerCase();
    if (map.has(lowerCase)) {
      let count = map.get(lowerCase);
      map.set(lowerCase, count + 1);
    } else {
      map.set(lowerCase, 1);
    }
  }
  sortByCount(map);
};
const readMyFile = (filename) => {
  fs.readFile(filename, { encoding: 'utf-8' }, (err, data) => {
    countOccurances(data);
  });
};
readMyFile('file.txt');
