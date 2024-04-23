const arr = [
  {
    firstName: 'Akshay',
    lastName: 'Sainin',
    age: 26,
  },
  {
    firstName: 'Logan',
    lastName: 'Wolverine',
    age: 106,
  },
  {
    firstName: 'Dune',
    lastName: 'Destroyer',
    age: 48,
  },
  {
    firstName: 'Deepika',
    lastName: 'Padukoni',
    age: 26,
  },
];

const op = arr.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(op);
