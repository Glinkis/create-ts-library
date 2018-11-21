#!/usr/bin/env node
import program from "commander";
// @ts-ignore
import jest from "jest";
import rimraf from "rimraf";
import { error, info } from "./console";
import { webpackDev, webpackProd } from "./webpack";

const path = process.cwd();

rimraf(`${path}/dist`, {}, (err) => {
  if (err === null) {
    return;
  }
  error(err);
});

program
  .option("-b, --build", "Add development")
  .option("-d, --dev", "Add development")
  .option("-p, --prod", "Add production")
  .option("-t, --test", "Add test")
  .option("-w, --watch", "Add watch")
  .parse(process.argv);

if (program.build) {
  if (program.watch) {
    webpackDev({ watch: true });
    webpackProd({ watch: true });
  } else {
    webpackDev();
    webpackProd();
  }
}

if (program.dev) {
  if (program.watch) {
    webpackDev({ watch: true });
  } else {
    webpackDev();
  }
}

if (program.prod) {
  if (program.watch) {
    webpackProd({ watch: true });
  } else {
    webpackProd();
  }
}

if (program.test) {
  if (program.watch) {
    jest.run(["--watch"]);
  } else {
    jest.run();
  }
}

if (program.watch) {
  info("Watching...");
}
