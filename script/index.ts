#!/usr/bin/env node
// @ts-ignore
import * as jest from "jest";
import rimraf from "rimraf";
import { error, info } from "./console";
import flags from "./flags";
import { compileLib } from "./tsc";
import { tslint } from "./tslint";
import { webpackDev, webpackProd } from "./webpack";

// tslint:disable-next-line:no-console
console.clear();

const [, , ...args] = process.argv;

const hasFlags = (flags: string) => {
  return flags.split(",").some((f) => args.includes(f));
};

const cli = {
  build: hasFlags(flags.build.flags),
  dev: hasFlags(flags.dev.flags),
  prod: hasFlags(flags.prod.flags),
  lib: hasFlags(flags.lib.flags),
  lint: hasFlags(flags.lint.flags),
  test: hasFlags(flags.test.flags),
  watch: hasFlags(flags.watch.flags),
  help: hasFlags(flags.help.flags),
};

if (cli.help) {
  for (const flag of Object.values(flags)) {
    info(`${flag.flags.split(",").join(" ")} / ${flag.desc}`);
  }
}

if (cli.build) {
  webpackDev({ watch: cli.watch });
  webpackProd({ watch: cli.watch });
  compileLib();
}

// Remove dist folder is we're creating new output.
if (cli.build || cli.dev || cli.prod || cli.lib) {
  rimraf(`${process.cwd()}/dist`, {}, (err) => {
    if (err !== null) {
      error(err);
    }
  });
}

if (cli.dev) {
  webpackDev({ watch: cli.watch });
}

if (cli.prod) {
  webpackProd({ watch: cli.watch });
}

if (cli.lib) {
  compileLib();
}

if (cli.lint) {
  tslint();
}

if (cli.test) {
  jest.run(cli.watch ? ["--watch"] : []);
}

if (cli.watch) {
  info("Watching...");
}
