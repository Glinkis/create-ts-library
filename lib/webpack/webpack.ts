import webpack, { Configuration, Stats } from "webpack";
import merge from "webpack-merge";
import { abort, error, warning } from "../console";
import development from "./webpack.config.dev";
import production from "./webpack.config.prod";

export const buildDevelopmentBundle = async (config: Configuration) => {
  const localConfig = await findLocalConfig();
  return new Promise((resolve) =>
    webpack(merge(development, localConfig, config), createHandler(resolve)),
  );
};

export const buildProductionBundle = async (config: Configuration) => {
  const localConfig = await findLocalConfig();
  return new Promise((resolve) =>
    webpack(merge(production, localConfig, config), createHandler(resolve)),
  );
};

const findLocalConfig = async () => {
  try {
    return (await import(`${process.cwd()}/webpack.config.ts`)).default;
  } catch (err) {
    return {};
  }
};

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
