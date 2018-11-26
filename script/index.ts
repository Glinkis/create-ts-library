#!/usr/bin/env node
// @ts-ignore
import * as jest from "jest";
import path from "path";
import rimraf from "rimraf";
import { abort, info, success } from "./console";
import flags from "./flags";
import { lint } from "./linting";
import { compileLibrary } from "./tsc";
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
  dev: hasFlags(flags.dev.flags),
  prod: hasFlags(flags.prod.flags),
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

if (cli.lint) {
  (async () => {
    info("Linting...");
    await lint();
    success("Linted!\n");
  })();
}

if (cli.test) {
  jest.run(cli.watch ? ["--watch"] : []);
}

if (cli.build) {
  cli.lib = true;
  cli.dev = true;
  cli.prod = true;
}

// Remove dist folder if we're creating new output.
if (cli.dev || cli.prod || cli.lib) {
  rimraf(path.resolve(process.cwd(), "dist"), {}, async (err) => {
    if (err != null) {
      throw abort(err);
    }

    if (cli.lib) {
      info("Compiling library...");
      await compileLibrary();
      success("Compiled library!\n");
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
  });
}
