import webpack, { Configuration } from "webpack";
import merge from "webpack-merge";
import { error, success } from "./console";
import development from "./webpack/development";
import production from "./webpack/production";

const handler: webpack.Compiler.Handler = (err, stats) => {
  if (err) {
    error(err);
    return;
  }

  if (
    typeof stats.startTime === "number" &&
    typeof stats.endTime === "number"
  ) {
    success(`Done in ${(stats.endTime - stats.startTime) / 1000}s.`);
  }
};

export function webpackDev(options: Configuration = {}) {
  webpack(merge(development, options), handler);
}

export function webpackProd(options: Configuration = {}) {
  webpack(merge(production, options), handler);
}
