let a = { x: 3 };
let b = { x: 3 };

let c = { x: 4 };
let d = c;
if (a === b) {
  console.log('true');
} else {
  console.log('false');
}

if (c === d) {
  console.log('true');
} else {
  console.log('false');
}

const NFE = function myFun(){
  console.log("ARE SAME ?", NFE===myFun);
  myFun = 10; // can't be changed, its immutbale just like [[PromiseResult]]
  console.log("ARE SAME ?", NFE===myFun); //true
}

NFE()