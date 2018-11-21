// tslint:disable:no-console
import chalk from "chalk";

export const info = (...params: any[]) => {
  console.log(chalk.cyanBright(...params));
};

export const success = (...params: any[]) => {
  console.log(chalk.greenBright(...params));
};

export const successTitle = (...params: any[]) => {
  success(chalk.underline(chalk.bold(...params)));
};

export const error = (...params: any[]) => {
  console.error(chalk.redBright(...params));
};

export const abort = (...params: any[]) => {
  throw new Error(chalk.bgRedBright(...params));
};
