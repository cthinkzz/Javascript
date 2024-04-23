//bubling
// document.getElementById('grandparent').addEventListener('click', () => {
//   console.log('grandparent');
// });
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('parent');
// });
// document.getElementById('child').addEventListener('click', () => {
//   console.log('child');
// });

//capturing
// document.getElementById('grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('grandparent');
//   },
//   true
// );
// document.getElementById('parent').addEventListener(
//   'click',
//   () => {
//     console.log('parent');
//   },
//   true
// );
// document.getElementById('child').addEventListener(
//   'click',
//   () => {
//     console.log('child');
//   },
//   true
// );

//mixmatch
// document.getElementById('grandparent').addEventListener(
//   'click',
//   () => {
//     console.log('grandparent');
//   },
//   false
// );
// document.getElementById('parent').addEventListener(
//   'click',
//   () => {
//     console.log('parent');
//   },
//   true
// );
// document.getElementById('parent').addEventListener('click', () => {
//   console.log('parent no capture');
// });
// document.getElementById('child').addEventListener(
//   'click',
//   () => {
//     console.log('child');
//   },
//   true
// );

//we have to remove event by the same phase
// const fn = () => {
//   console.log('child');
// };
// document.getElementById('child').addEventListener('click', fn, true);
// //here we are passing capture as false, so it doesnt remove event listener
// document.getElementById('child').removeEventListener('click', fn, false);
// //below one works
// document.getElementById('child').removeEventListener('click', fn, true);

//we can add multiple event listenrers functions for same event listener and they execute in the order they are created
// document
//   .getElementById('child')
//   .addEventListener('click', () => console.log('1'), true);
// document
//   .getElementById('child')
//   .addEventListener('click', () => console.log('2'), true);

//but attaching same function reference only attaches event once
const fn2 = () => {
  console.log('Called only once');
};
document.getElementById('child').addEventListener('click', fn2, true);
document.getElementById('child').addEventListener('click', fn2, true);
