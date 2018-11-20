import WebpackHtmlPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
import packageJson from "../package.json";
import config from "./config";

export default {
  ...config,
  output: {
    ...config.output,
    filename: `${packageJson.name}.js`,
  },
  // @ts-ignore
  devServer: {
    port: 5050,
    host: "localhost",
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: __dirname + "/../test/test.html",
    }),
  ],
} as Configuration;
