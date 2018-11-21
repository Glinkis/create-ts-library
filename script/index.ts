#!/usr/bin/env node
// @ts-ignore
import jest from "jest";
import rimraf from "rimraf";
import { error, info } from "./console";
import { webpackDev, webpackProd } from "./webpack";

// tslint:disable-next-line:no-console
console.clear();

const path = process.cwd();

rimraf(`${path}/dist`, {}, (err) => {
  if (err !== null) {
    error(err);
  }
});

const [, , ...args] = process.argv;

const cli = {
  dev: args.includes("-d") || args.includes("--dev"),
  prod: args.includes("-p") || args.includes("--prod"),
  build: args.includes("-b") || args.includes("--build"),
  test: args.includes("-t") || args.includes("--test"),
  watch: args.includes("-w") || args.includes("--watch"),
};

if (cli.build) {
  webpackDev({ watch: cli.watch });
  webpackProd({ watch: cli.watch });
}

if (cli.dev) {
  webpackDev({ watch: cli.watch });
}

if (cli.prod) {
  webpackProd({ watch: cli.watch });
}

if (cli.test) {
  jest.run(cli.watch ? ["--watch"] : []);
}

if (cli.watch) {
  info("Watching...");
}
