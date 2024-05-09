https://jsfiddle.net/mo43xsny/7/	

const LIMIT = 5;
const FetchWrapper = () => {
  let count = 0;
  let queue = [];

//   const callback = () => {
//     let prevCount = count;
//     while (count < LIMIT) {
//       for (let item of queue) {
//         if (count < LIMIT) {
//           count++;
//           const { url, options, resolve, reject } = item;
//           try {
//             const resp = fetch(url, options);
//             resolve(resp);
//           } catch (err) {
//             reject(err);
//           }
//         }
//         queue = queue.slice(0, count - prevCount);
//       }
//     }
//   };

const callback = () => {
    while (count < LIMIT && queue.length > 0) {
      const { url, options, resolve, reject } = queue.shift();
      fetch(url, options)
        .then(resolve)
        .catch(reject)
        .finally(() => {
          count--;
          callback();
        });
      count++;
    }
  };

  return async function (url, options) {
    if (count < LIMIT) {
      count++;
      return fetch(url, options)
        .finally(() => {
          count--;
          callback();
        });
    } else {
      return new Promise((resolve, reject) => {
        queue.push({ url, options, resolve, reject });
      });
    }
  };
};