#!/usr/bin/env node
// @ts-ignore
import jest from "jest";
import rimraf from "rimraf";
import { error, info } from "./console";
import flags from "./flags";
import { webpackDev, webpackProd } from "./webpack";

// tslint:disable-next-line:no-console
console.clear();

rimraf(`${process.cwd()}/dist`, {}, (err) => {
  if (err !== null) {
    error(err);
  }
});

const [, , ...args] = process.argv;

const hasFlags = (flags: string) => {
  return flags.split(",").some((f) => args.includes(f));
};

const build = hasFlags(flags.build.flags);
const dev = hasFlags(flags.dev.flags);
const prod = hasFlags(flags.prod.flags);
const test = hasFlags(flags.test.flags);
const watch = hasFlags(flags.watch.flags);
const help = hasFlags(flags.help.flags);

if (help) {
  for (const flag of Object.values(flags)) {
    info(`${flag.flags.split(",").join(" ")} / ${flag.desc}`);
  }
}

if (build) {
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
