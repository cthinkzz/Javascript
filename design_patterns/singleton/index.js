import { runProgram1, runProgram1WithPattern } from './Program1.js';
import { runProgram2, runProgram2WithPattern } from './Program2.js';

const main = () => {
  console.log('Before Singleton \n');
  runProgram1();
  runProgram2();

  console.log('\n After Singleton \n');
  runProgram1WithPattern();
  runProgram2WithPattern();
};
main();
