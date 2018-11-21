#!/usr/bin/env node
// @ts-ignore
import jest from "jest";
import rimraf from "rimraf";
import { error, info } from "./console";
import { webpackDev, webpackProd } from "./webpack";

// tslint:disable-next-line:no-console
console.clear();

rimraf(`${process.cwd()}/dist`, {}, (err) => {
  if (err !== null) {
    error(err);
  }
});

const [, , ...args] = process.argv;

const hasFlags = (...flags: string[]) => {
  for (const flag of flags) {
    if (args.includes(flag)) {
      return true;
    }
  }
  return false;
};

const dev = hasFlags("-d", "--dev");
const prod = hasFlags("-p", "--prod");
const test = hasFlags("-t", "--test");
const watch = hasFlags("-w", "--watch");

if (!args.length || (args.length === 1 && watch)) {
  webpackDev({ watch });
  webpackProd({ watch });
}

if (dev) {
  webpackDev({ watch });
}

if (prod) {
  webpackProd({ watch });
}

if (test) {
  jest.run(watch ? ["--watch"] : []);
}

if (watch) {
  info("Watching...");
}
