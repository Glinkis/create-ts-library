#!/usr/bin/env node
// @ts-ignore
import jest from "jest";
import rimraf from "rimraf";
import { error } from "./console";
import { webpackDev, webpackProd } from "./webpack";

const path = process.cwd();

const [, , ...args] = process.argv;

rimraf(`${path}/dist`, {}, (err) => {
  if (err === null) {
    return;
  }
  error(err);
});

if (args.includes("dev")) {
  webpackDev();
}

if (args.includes("prod")) {
  webpackProd();
}

if (args.includes("test")) {
  jest.run();
}
