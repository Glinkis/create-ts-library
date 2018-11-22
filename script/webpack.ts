import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
import { error, info, successTitle, warning } from "./console";
import development from "./webpack/development";
import production from "./webpack/production";

export const webpackDev = (options: Configuration = {}) => {
  webpack(merge(development, options), handler);
};

export const webpackProd = (options: Configuration = {}) => {
  webpack(merge(production, options), handler);
};

const handler: webpack.Compiler.Handler = (err, stats) => {
  if (err) {
    error(err);
    return;
  }

  const { errors, warnings, chunks } = stats.compilation;

  if (stats.hasErrors()) {
    for (const { message } of errors) {
      error(message);
    }
    return;
  }

  if (stats.hasWarnings()) {
    for (const { message } of warnings) {
      warning(message);
    }
  }

  successTitle("Success!");

  for (const chunk of chunks) {
    for (const file of chunk.files) {
      info(file);
    }
  }

  if (
    typeof stats.startTime === "number" &&
    typeof stats.endTime === "number"
  ) {
    info(`${(stats.endTime - stats.startTime) / 1000}s\n`);
  }
};
