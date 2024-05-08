function abc() {
  // console.log('Calling again abc', abc);
  //   abc(); //infinite calling
}
// abc();

// Named function expression
// z(); // doesn't work, as its behave same as variable hoisting
var z = function xyz() {
  console.log('HELLO from ', xyz); //can access xyz inside function just like above abc, as it acts as a local variable
  console.log('HELLO from ', z); //can access z inside function and both xyz and z prints the same
  console.log('is same?', z === xyz);

  // a(); //error stack trace shows xyz in error
};

// xyz(); // error : not accessible outside function
z(); // works

//Recursion is possible in function express as well as NFE
var regularFuncExpr = function (i) {
  if (i > 0) {
    console.log(i);
    regularFuncExpr(--i);
  }

  // a(); //error stack trace shows regularFuncExpr in error
};
regularFuncExpr(5);
