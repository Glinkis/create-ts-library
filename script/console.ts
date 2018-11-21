// tslint:disable:no-console
import chalk from "chalk";

export const info = (...params: any[]) => {
  console.log(chalk.whiteBright(chalk.bold(...params)));
};

export const success = (...params: any[]) => {
  console.log(chalk.greenBright(chalk.bold(...params)));
};

export const error = (...params: any[]) => {
  console.error(chalk.redBright(chalk.bold(...params)));
};

export const abort = (...params: any[]) => {
  throw new Error(chalk.bgRedBright(...params));
};
