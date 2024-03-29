import { LoggerClass, logger } from './Singleton.js';

const loggerInstance = new LoggerClass();

export const runProgram2 = () => {
  console.log('logger count ', loggerInstance.logs.length);
  loggerInstance.log('Program - 2');
  console.log('logger count ', loggerInstance.logs.length);
};

export const runProgram2WithPattern = () => {
  console.log('logger count ', logger.logs.length);
  logger.log('Program - 2');
  console.log('logger count ', logger.logs.length);
};
