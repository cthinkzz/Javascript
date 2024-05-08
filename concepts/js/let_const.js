// a = 20; (error)
var a1 = 20;
let a = 10;

b = 20;
var b = 10;

//DEFAULT VARIABLES

a2 = 30; //same as
window.a2 = 20;

// console.log(a3); //can't access before like var, because memory allocation happens at run time, and they are treated as global variables. Not Even HOISTED!!
window.a3 = 20;
a3 = 30; //no error

//memory and code component explained in this example
function callMe() {
  i = 10;
}
//   console.log(i) this shows error as trying to access i before function call
callMe();
console.log(i);
