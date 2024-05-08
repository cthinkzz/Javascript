//block level closure
function BlockLevelClosure() {
  let i = 0;
  {
    i = 1;
    setTimeout(() => {
      debugger;
      console.log(i), 1000;
    }); //closure
  }
  {
    i = 2;
    setTimeout(() => {
      console.log(i), 1000;
    }); //closure
  }
  {
    i = 3;
    setTimeout(() => {
      console.log(i), 1000;
    }); //closure
  }
  {
    let i; //for loop also works similarly, as i is initialized inside for() loop
    i = 4;
    setTimeout(() => {
      debugger;
      console.log(i); //no closure as its at block level, but it has access to closured i as well, but that is shadowed
    }, 1000);
  }
}

BlockLevelClosure();
