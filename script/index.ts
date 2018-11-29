#!/usr/bin/env node
import path from "path";
import rimraf from "rimraf";
import { promisify } from "util";
import { info, success } from "./console";
import flags from "./flags";
import { init } from "./init";
import { compileTypescript } from "./typescript/typescript";
import { verifyPackages } from "./utils";

// tslint:disable-next-line:no-console
console.clear();

const [, , ...args] = process.argv;

// Map command flags to cli object.
const cli: { [key: string]: boolean } = {};
for (const [key, value] of Object.entries(flags)) {
  cli[key] = args.includes(value.command);
}

if (cli.build) {
  cli.lint = true;
  cli.lib = true;
  cli.es = true;
  cli.dev = true;
  cli.prod = true;
}

if (cli.init) {
  init();
}

if (cli.help) {
  const help = Object.values(flags).reduce((acc, val) => {
    return (acc += `${val.command} / ${val.desc}\n`);
  }, "");
  info(`${help}\n`);
}

(async () => {
  if (cli.lint) {
    await verifyPackages("tslint");
    const { lint } = await import("./linting/linting");

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

    if (cli.dev || cli.prod) {
      await verifyPackages(
        "webpack",
        "@types/webpack",
        "webpack-merge",
        "@types/webpack-merge",
        "webpack-dts-bundle",
      );
    }

    if (cli.dev) {
      info("Building development bundle...");
      const { buildDevelopmentBundle } = await import("./webpack/webpack");
      await buildDevelopmentBundle({ watch: cli.watch });
      success("Built development bundle!\n");
    }

    if (cli.prod) {
      info("Building production bundle...");
      const { buildProductionBundle } = await import("./webpack/webpack");
      await buildProductionBundle({ watch: cli.watch });
      success("Built production bundle!\n");
    }
  }

  if (cli.test) {
    await verifyPackages("jest", "@types/jest", "ts-jest");

    const jest = await import("jest" as any);
    const commands = [`--config=${__dirname}/../jest.config.js`];

    if (cli.watch) {
      commands.push("--watch");
    }

    jest.run(commands);
  }
})();
