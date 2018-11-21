// tslint:disable:no-console
import chalk from "chalk";

export const error = (...params: any[]) => {
  console.error(chalk.redBright(...params));
};

export const success = (...params: any[]) => {
  console.log(chalk.greenBright(...params));
};

export const abort = (...params: any[]) => {
  throw new Error(chalk.bgRedBright(...params));
};
