function Counter() {
  let count = 0;
  // this.count=0;
  this.increment = () => {
    count++;
    // this.count++;
  };
  this.getCount = () => {
    console.log('count', count);
    // console.log("count",this.count)
  };
}

const counter = new Counter();
// counter.increment()
// counter.getCount();
// counter.increment()
// counter.getCount();

counter.count++; //this does not have access to counter
counter.getCount();

//it would work if we have used this.count inside Counter function istead of normal let/var
