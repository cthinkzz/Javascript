/**
 * One-to-many relationship between subject and objects
 * Observers are subscribed to Subject, that emits/broadcast the events which will be observed by all subscribed observers. How? using callbacks
 * ex: event listeners in DOM,
 */

// Observer
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// Subject
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

// Usage
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Hello observers!');

subject.unsubscribe(observer1);

subject.notify('Observers updated!');
