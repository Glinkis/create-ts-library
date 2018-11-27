#!/usr/bin/env node
// @ts-ignore
import * as jest from "jest";
import path from "path";
import rimraf from "rimraf";
import { promisify } from "util";
import { info, success } from "./console";
import flags from "./flags";
import { lint } from "./linting";
import { compileTypescript } from "./typescript/typescript";
import { buildDevelopmentBundle, buildProductionBundle } from "./webpack";

// tslint:disable-next-line:no-console
console.clear();

const [, , ...args] = process.argv;

const hasFlags = (flags: string) => {
  return flags.split(",").some((f) => args.includes(f));
};

const cli = {
  build: hasFlags(flags.build.flags),
  lib: hasFlags(flags.lib.flags),
  es: hasFlags(flags.es.flags),
  dev: hasFlags(flags.dev.flags),
  prod: hasFlags(flags.prod.flags),
  lint: hasFlags(flags.lint.flags),
  test: hasFlags(flags.test.flags),
  watch: hasFlags(flags.watch.flags),
  help: hasFlags(flags.help.flags),
};

if (cli.build) {
  cli.lib = true;
  cli.dev = true;
  cli.prod = true;
}

if (cli.help) {
  for (const flag of Object.values(flags)) {
    info(`${flag.flags.split(",").join(" ")} / ${flag.desc}`);
  }
  // Line break.
  info();
}

(async () => {
  if (cli.lint) {
    info("Linting...");
    await lint();
    success("Linted!\n");
  }

  if (cli.lib || cli.es || cli.dev || cli.prod) {
    // Remove dist folder if we're creating new output.
    await promisify(rimraf)(path.resolve(process.cwd(), "dist"));

    if (cli.lib) {
      info("Compiling commonjs library...");
      await compileTypescript("tsconfig.lib.json", cli.watch);
      success("Compiled commonjs library!\n");
    }

    if (cli.es || cli.dev || cli.prod) {
      info("Compiling esnext library...");
      await compileTypescript("tsconfig.es.json", cli.watch);
      success("Compiled esnext library!\n");
    }

    if (cli.dev) {
      info("Building development bundle...");
      await buildDevelopmentBundle({ watch: cli.watch });
      success("Built development bundle!\n");
    }

    if (cli.prod) {
      info("Building production bundle...");
      await buildProductionBundle({ watch: cli.watch });
      success("Built production bundle!\n");
    }
  }
})();

if (cli.test) {
  jest.run(cli.watch ? ["--watch"] : []);
}
