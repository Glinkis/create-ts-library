#!/usr/bin/env node
import rimraf from "rimraf";
import { error } from "./console";
import { webpackDev, webpackProd } from "./webpack";

export const path = process.cwd();

const [, , ...args] = process.argv;

rimraf(`${path}/dist`, {}, (err) => {
  error(err);
});

if (args.includes("dev")) {
  webpackDev();
}

if (args.includes("prod")) {
  webpackProd();
}
