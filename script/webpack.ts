import webpack, { Compiler, Configuration } from "webpack";
import merge from "webpack-merge";
import { error, info, successTitle, warning } from "./console";
import development from "./webpack/webpack.config.dev";
import production from "./webpack/webpack.config.prod";

export const webpackDev = (config: Configuration) => {
  webpack(merge(development, config), handler);
};

export const webpackProd = (config: Configuration) => {
  webpack(merge(production, config), handler);
};

const handler: Compiler.Handler = (err, stats) => {
  if (err) {
    error(err);
    return;
  }

  const { compilation, hasErrors, hasWarnings } = stats;
  const { warnings, errors, chunks } = compilation;

  if (hasWarnings()) {
    logWarnings(warnings);
  }

  if (hasErrors()) {
    logErrors(errors);
    return;
  }

  successTitle("Success!");
  logFiles(chunks);
  logTime(stats);
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

const logFiles = (chunks: any[]) => {
  for (const chunk of chunks) {
    for (const file of chunk.files) {
      info(file);
    }
  }
};

const logTime = (stats: webpack.Stats) => {
  const { startTime, endTime } = stats;
  if (typeof startTime === "number" && typeof endTime === "number") {
    info(`${(endTime - startTime) / 1000}s\n`);
  }
};
