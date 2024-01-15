const obj1 = {
  firstName: 'Chandu',
  lastName: 'Patil',
  getDetails: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

const obj2 = {
  firstName: 'Captain',
  lastName: 'America',
};

console.log(obj1.getDetails.call(obj2));

function detailsFn(age, height) {
  return this.firstName + ' ' + this.lastName + ' ' + age + ' ' + height;
}
console.log(detailsFn.call(obj2, 25, 5.6));

//apply
console.log(detailsFn.apply(obj2, [25, 5.6]));

//bind
const getDetails = detailsFn.bind(obj2, 25, 5.6);
console.log(getDetails);
console.log('obj2', obj2);
console.log(getDetails());

const getDetails2 = detailsFn.bind(obj2, 26);
console.log('diff params-2', getDetails2(1));

const getDetails3 = detailsFn.bind(obj2);
//below doesnot work, currying is not possible in bind, and we can only pass arguments in either first or second call
// console.log("diff params-3", getDetails3(5.7)(26));

const countObj = {
  name: 'chandu',
  count: 1,
};
function getCount() {
  this.count++;
  console.log('Clicked by ' + this.name + ' for ' + this.count + ' times');
}
const countClick = getCount.bind(countObj);
console.log(countClick);
document.getElementById('button').addEventListener('click', countClick);
