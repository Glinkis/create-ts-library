import webpack, { Configuration, Stats } from "webpack";
import merge from "webpack-merge";
import { abort, error, warning } from "./console";
import development from "./webpack/webpack.config.dev";
import production from "./webpack/webpack.config.prod";

export const buildDevelopmentBundle = (config: Configuration) =>
  new Promise((resolve) =>
    webpack(merge(development, config), createHandler(resolve)),
  );

export const buildProductionBundle = (config: Configuration) =>
  new Promise((resolve) =>
    webpack(merge(production, config), createHandler(resolve)),
  );

const createHandler = (callback: () => void) => {
  return (err: Error, stats: Stats) => {
    if (err) {
      throw abort(err);
    }

    const { warnings, errors } = stats.compilation;

    if (stats.hasWarnings()) {
      logWarnings(warnings);
    }

    if (stats.hasErrors()) {
      logErrors(errors);
      process.exit();
    }

    callback();
  };
};

const logWarnings = (warnings: any[]) => {
  for (const { message } of warnings) {
    warning(message);
  }
};

const logErrors = (errors: any[]) => {
  for (const { message } of errors) {
    error(message);
  }
};
