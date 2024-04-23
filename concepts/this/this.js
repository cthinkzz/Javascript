console.log('this outside function', this); // only happens in nodeJs?
console.log('globalThis outside function', globalThis);

function myFun() {
  'use strict'; //if strict mode, then its undefined
  console.log('this inside function', this);
}
myFun();
// globalThis.myFun(); window.myFunc() works in Browser though

function myFun2() {
  console.log('globalThis', globalThis);
}
myFun2();

const user = {
  name: 'Chandu',
  display: function () {
    console.log(this.name);
  },
  display2: () => {
    console.log(this.name); //reference to parent scope, but there is no functional parent scope for this arrow function, so it prints undefined
  },
  display3: function () {
    const disp = () => {
      console.log(this.name); //reference to parent scope
    };
    disp();
  },
  display4: function () {
    const disp = () => {
      console.log(this.name); //reference to parent scope
    };
    return disp;
  },
};

const user2 = {
  name: 'Logan',
};

user.display.call(user2);
user.display2.call(user2);
user.display3.call(user2);
user.display4.call(user2)();
