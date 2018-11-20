import { Config } from "karma";
import { defaultConfig } from "./config";

delete defaultConfig.entry;
delete defaultConfig.output;

export default (config: Config) =>
  config.set({
    basePath: "",
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-sourcemap-loader",
      "karma-spec-reporter",
    ],
    browsers: ["ChromeHeadless"],
    customLaunchers: {
      ChromeTravis: { base: "Chrome", flags: ["--no-sandbox"] },
    },
    files: [{ pattern: "../test/index.js", watched: false }],
    preprocessors: {
      "../test/index.js": ["webpack", "sourcemap"],
    },
    frameworks: ["mocha", "chai"],
    reporters: ["spec"],
    // @ts-ignore
    webpack: {
      ...defaultConfig,
      /* Use this to get nice stack traces. */
      devtool: "eval",
      /* Use this to debug in browser. */
      // devtool: "eval-source-map",
    },
    webpackMiddleware: { noInfo: true },
  });
