document.getElementById('firstTr').addEventListener('click', (e) => {
  if (e.target.tagName === 'TD') {
    console.log('Clicked on ', e.target);
  }
});

document
  .getElementById('grandparent')
  .addEventListener('click', (e) => console.log('grandparent'), true);

document.getElementById('parent').addEventListener(
  'click',
  (e) => {
    console.log('parent');
    e.stopPropagation(); //this doesnt stop 2nd handler, but stops third handler because that is in bubble phase
    // e.stopImmediatePropagation(); //this does
  },
  true
);
document.getElementById('parent').addEventListener(
  'click',
  (e) => {
    console.log('parent-2nd handler');
  },
  true
);
document.getElementById('parent').addEventListener(
  'click',
  (e) => {
    console.log('parent-3rd handler');
  },
  false //false so called in bubble phase after child event is handled
);
document
  .getElementById('child')
  .addEventListener('click', (e) => console.log('child'), true);
