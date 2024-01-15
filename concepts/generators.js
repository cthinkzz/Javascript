function* genearator() {
  console.log('before 1');
  yield 1;
  console.log('after 1');
  console.log('before 2');
  yield 2;
  console.log('after 2');
  console.log('before 3');
  yield 3;
  console.log('after 3');
}
//comment each next and observe the behavior
//each next stops at the yield and subsequent next will let function proceed code from prvious yield
const callMe = genearator();
// console.log(callMe.next());
// console.log(callMe.next());
// console.log(callMe.next());

function* infiniteLoop() {
  console.log('before loop');
  let i = 1;
  while (true) {
    console.log('before yield');
    yield i;
    console.log('after yield');
    i++;
  }
}
//comment each next and observe the behavior
const callMe2 = infiniteLoop();
// console.log(callMe2.next());
// console.log(callMe2.next());

function* acceptParams() {
  console.log('before first');
  const first = yield '100+100?';
  console.log('after first', first);
  //whatever is passed can be accessed, but it still returns what we yield
  console.log('before second');

  const second = yield '100+200?';
  console.log('after second', second);
}

//comment each next and observe the behavior
const callMe3 = acceptParams();
// console.log(callMe3.next(100)); //first next is not passed to first variable in acceptParams function
// console.log(callMe3.next(200));
// console.log(callMe3.next(300));

function* forOfLoop() {
  yield 1;
  yield 2;
  yield 3;
}

//generator function work as a iterator, so we can use for..of loop. and it returns the array of yields
const callMe4 = forOfLoop();
for (let i of callMe4) {
  console.log(i);
}
// ..same as
console.log([...forOfLoop()]);

//generators can be used to create iterables (ease of writing next functions)

const iterableObj1 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      //if we don't define new attributes, the same from and to are shared across multiple iterations, so it will not print the values again when we do iteration 2nd time. See next example for that
      first: this.from,
      last: this.to,

      next() {
        if (this.first <= this.last) {
          return { done: false, value: this.first++ };
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};

console.log('iterableObj1');
console.log([...iterableObj1]);
for (let value of iterableObj1) {
  console.log(value);
}
//map Doesn't work on iterables, It has to be an array
// iterableObj.map((item)=>console.log(item))

const iterableObj2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.from <= this.to) {
          return { done: false, value: this.from++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

console.log('iterableObj2');
console.log([...iterableObj2]); //iteration exahsuted after first iteration!, so below one doesn't work
for (let value of iterableObj2) {
  console.log(value);
}

const iterableObjGenerator = {
  from: 1,
  to: 3,

  *[Symbol.iterator]() {
    //we have to use FOR LOOP in case of Generator function, normal if works when we return it from next() function
    // if (this.from <= this.to) {
    //   yield this.from++;
    // }
    for (let i = this.from; i <= this.to; i++) {
      yield i;
    }
  },
};
// console.log([...iterableObjGenerator]);
// That works, because range[Symbol.iterator]() now returns a generator, and generator methods are exactly what for..of expects:

// 1. it has a .next() method
// 2. that returns values in the form {value: ..., done: true/false}

//we can get iterable out of an array
let arr = [1, 2, 3];
let values = arr.values();
console.log(values);
console.log(values.next());
console.log(values.next());
for (let val of values) {
  console.log(val); //displayas only last value as we have exhasuted the first two using .next() method
}
console.log(values.next()); // {done:true,value:undefined}
