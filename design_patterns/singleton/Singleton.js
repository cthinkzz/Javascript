/**
 * sharing single object instance that is shared across application
 * disadvantage: RACE condition, multiple function/processes try to modify the same object at a same time
 * Example: Logger
 */
export class LoggerClass {
  constructor() {
    this.logs = [];
  }

  log(message) {
    console.log('Logging ', message);
    this.logs.push(message);
  }
}
/**
 * instead of directly exporting class and letting other files create different object instances, we ourself create an instance and export that, We can also freeze so that no other fiels add/remove new variables or methods to the object instance
 */

class LoggerSingleton {
  constructor() {
    if (LoggerSingleton.instance === undefined) {
      this.logs = [];
      LoggerSingleton.instance = this;
    } else {
      return LoggerSingleton.instance;
    }
  }

  log(message) {
    console.log('Logging ', message);
    this.logs.push(message);
  }
}
const logger = new LoggerSingleton();
Object.freeze(logger); // freezing the object so that no one can modify the properties
// LoggerSingleton.prototype.newAttribute = 'New Attribute'; //this will error out as object is freezed
export { logger };

// LoggerSingleton.prototype.newAttribute = 'New Attribute';
// const logger = new LoggerSingleton();
// console.log(logger.newAttribute)
// // not able to see newAttribute in log as its added using prototype
// console.log(logger)
// console.log(Object.getOwnPropertyNames(logger));
// console.log(Object.getOwnPropertyDescriptors(logger));
