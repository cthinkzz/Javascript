let obj = {
  from: 1,
  to: 5,

  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,

      async next() {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

//displays values once per second
// (async function () {
//   for await (let value of obj) {
//     console.log(value);
//   }
// })();

//can be written using Generator function
let objGenerator = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    for (let value = this.from; value <= this.to; value++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      yield value;
    }
  },
};

//displays values once per second
// (async function () {
//   for await (let value of objGenerator) {
//     console.log(value);
//   }
// })();

// if we have to get one by one value the we must use await

async function* asynGenerator() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield 1;

  await new Promise((resolve) => setTimeout(resolve, 1000));
  yield 2;
}
//this doens;t work
// let value = asynGenerator();
// console.log(value.next());

(async function () {
  let value = asynGenerator();
  console.log(await value.next()); //have to use await
  console.log(await value.next());
  for await (let value of asynGenerator()) {
    console.log(value);
  }
})();
