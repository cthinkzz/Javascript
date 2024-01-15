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

document.getElementById('app').innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
