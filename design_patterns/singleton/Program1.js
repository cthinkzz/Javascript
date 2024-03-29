import { LoggerClass, logger } from './Singleton.js';

const loggerInstance = new LoggerClass();

export const runProgram1 = () => {
  console.log('logger count ', loggerInstance.logs.length);
  loggerInstance.log('Program - 1');
  console.log('logger count ', loggerInstance.logs.length);
};

export const runProgram1WithPattern = () => {
  console.log('logger count ', logger.logs.length);
  logger.log('Program - 1');
  console.log('logger count ', logger.logs.length);
};
