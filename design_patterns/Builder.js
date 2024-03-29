/**
 * 1. Usecase: where parameters are optional & have to pass undefined explictly
 */

class Address {
  constructor(city, pincode) {
    this.city = city;
    this.pincode = pincode;
  }
}
class User {
  constructor(name, age, height, city, pincode) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = new Address(city, pincode);
  }
}
// assume only name & pincode are mandatory
const user = new User('Chandu', undefined, undefined, undefined, '580025');
/**
 * above, we have to pass undefined till we reach pincode, and end user can't identify what undefined is reffering to, so we can modify the constructor like shown below & also need to add new Builder class
 */

class Address2 {
  constructor(pincode) {
    //original class constructor changed to accept only the mandatory params
    this.pincode = pincode;
  }
}

class AddressBuilder {
  constructor(pincode) {
    this.address = new Address2(pincode);
  }
  setCity(city) {
    this.address.city = city;
    return this;
  }

  build() {
    return this.address;
  }
}

class User2 {
  constructor(name) {
    // original class constructor changed to accept only the mandatory params
    this.name = name;
  }
}

class UserBuilder {
  constructor(name) {
    //only accepting the mandatory params
    this.user = new User2(name);
  }

  setAge(age) {
    this.user.age = age;
    return this; //returning this (current object) to help chain the setter calls
  }

  setHeight(height) {
    this.user.height = height;
    return this;
  }

  setAddress(address) {
    this.user.address = address;
    return this;
  }

  build() {
    return this.user;
  }
}

const user21 = new UserBuilder('Chandu')
  .setAge(20)
  .setAddress(new AddressBuilder('580025').build())
  .build();
const user22 = new UserBuilder('Patil')
  .setAge(26)
  .setAddress(new AddressBuilder('580025').setCity('Hubli').build())
  .build();

console.log('user21', user21);
console.log('user22', user22);

class Address3 {
  constructor(pincode, { city } = {}) {
    this.pincode = pincode;
    this.city = city;
  }
}

class User3 {
  constructor(name, address, { age, height } = {}) {
    //by making this object syntax, we can avoid passing undefined for optional parameters
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
  }
}

const user31 = new User3('Chandu', new Address('580025', { city: 'Hubli' }), {
  age: 6,
}); //no need to pass undefined for params which are not needed
// console.log('user31', user31);
