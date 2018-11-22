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

export const warning = (...params: any[]) => {
  console.warn(chalk.yellowBright(...params));
};

export const error = (...params: any[]) => {
  console.error(chalk.redBright(...params));
};

export const errorTitle = (...params: any[]) => {
  error(chalk.underline(chalk.bold(...params)));
};

export const abort = (...params: any[]) => {
  throw new Error(chalk.bgRedBright(...params));
};
