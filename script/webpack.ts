import webpack from "webpack";
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

export function webpackDev() {
  webpack(development, handler);
}

export function webpackProd() {
  webpack(production, handler);
}
