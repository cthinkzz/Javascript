const inp = [
  { user: 'UserA', city: 'Bangalore' },
  { user: 'UserB', city: 'Delhi' },
  { user: 'UserC', city: 'Bangalore' },
];
//output [{ Bangalore: ['UserA', 'UserC'] }, { Delhi: ['UserB'] }];

const mySolution = () => {
  const map = new Map();
  inp.forEach((item) => {
    const city = item.city;
    if (map.has(city)) {
      const arr = map.get(city);
      arr.push(item.user);
      map.set(city, arr);
    } else {
      map.set(city, [item.user]);
    }
  });
  console.log(map);
  console.log([...map]);
};

const chatGPT = () => {
  const inp = [
    { user: 'UserA', city: 'Bangalore' },
    { user: 'UserB', city: 'Delhi' },
    { user: 'UserC', city: 'Bangalore' },
  ];

  const output = inp.reduce((acc, { user, city }) => {
    acc[city] = acc[city] || [];
    acc[city].push(user);
    return acc;
  }, {});

  const result = Object.entries(output).map(([city, users]) => ({
    [city]: users,
  }));

  console.log(result);
};
