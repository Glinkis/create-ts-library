import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
import { error, info, successTitle } from "./console";
import development from "./webpack/development";
import production from "./webpack/production";

const handler: webpack.Compiler.Handler = (err, stats) => {
  if (err) {
    error(err);
  }

  if (stats.hasErrors) {
    for (const compilationError of stats.compilation.errors) {
      error(compilationError.message);
    }
  }

  successTitle("Success!");

  for (const chunk of stats.compilation.chunks) {
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

export const webpackDev = (options: Configuration = {}) => {
  webpack(merge(development, options), handler);
};

export const webpackProd = (options: Configuration = {}) => {
  webpack(merge(production, options), handler);
};
