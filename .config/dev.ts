import WebpackHtmlPlugin from "html-webpack-plugin";
import { Configuration } from "webpack";
// @ts-ignore
import packageJson from "../package.json";
import { defaultConfig } from "./config";

const config: Configuration = {
  ...defaultConfig,
  output: {
    ...defaultConfig.output,
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
};

export default config;
