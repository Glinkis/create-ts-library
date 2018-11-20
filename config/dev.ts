import WebpackHtmlPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
//  @ts-ignore
import { name, version } from "../package.json";
import config from "./config";

export default {
  ...config,
  output: {
    ...config.output,
    filename: `${name}.${version}.js`,
  },
  // @ts-ignore
  devServer: {
    port: 5050,
    host: "localhost",
  },
  plugins: [
    new WebpackHtmlPlugin({
      template: __dirname + "/template.html",
    }),
  ],
} as Configuration;
