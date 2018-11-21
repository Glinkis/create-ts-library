import webpack from "webpack";
import { error, success } from "./console";
import development from "./webpack/development";
import production from "./webpack/production";

const handler: webpack.Compiler.Handler = (err, stats) => {
  if (err) {
    error(err);
  } else {
    success("Done!");
  }
};

export function webpackDev() {
  webpack(development, handler);
}

export function webpackProd() {
  webpack(production, handler);
}
