/**
 * 1. Usecase: Have to do null check before accessing the object
 * 2. Solution: Returning object with default properties instead of null
 * 3. Advantage? No need to have null check for every usage
 * 4. Disadvantage? Overhead to write another class for this sake
 * 5. class name starts with Null to indicate that it impliments NullObject pattern
 */

class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === 'Bob';
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = 'Guest';
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, 'Bob'), new User(2, 'Alice')];

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  return user || new NullUser();
};

const printUserAccess = (id) => {
  const user = getUser(id);
  if (user.hasAccess()) {
    console.log(`Hi ${user.name} You have a access`);
  } else {
    console.log(`Sorry ${user.name} dont have access`);
  }
};

printUserAccess(1);
printUserAccess(2);
printUserAccess(3);
