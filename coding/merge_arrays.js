const x = [{ a: 1 }, { b: 5 }];
const y = [{ b: 2 }, { c: 0 }];
// const outp = { a: 1, b: 5, c: 0 };

const mergeProperties = (x, y) => {
  const outp = {};
  x.forEach((item) => {
    const key = Object.keys(item)[0];
    const idx = y.findIndex((yItem) => yItem[key]);
    outp[key] = item[key];
  });
  y.forEach((item) => {
    const key = Object.keys(item)[0];
    if (!outp[key]) {
      outp[key] = item[key];
    }
  });
  console.log(outp);
};

mergeProperties(x, y);
