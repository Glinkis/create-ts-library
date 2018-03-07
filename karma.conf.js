const webpack = require("webpack");

const sourceMapLoader = {
  enforce: "pre",
  test: /\.js$/,
  loader: "source-map-loader",
  exclude: /node_modules/
};

const typeScriptLoader = {
  test: /\.ts$/,
  loader: "ts-loader",
  exclude: /node_modules/
};

const webpackConfig = {
  mode: "development",
  /* Use this to get nice stack traces. */
  devtool: "eval",
  /* Use this to debug in browser. */
  // devtool: "eval-source-map",
  module: { rules: [sourceMapLoader, typeScriptLoader] },
  resolve: { extensions: [".js", ".ts"] }
};

module.exports = config =>
  config.set({
    basePath: "",
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-sourcemap-loader"
    ],
    browsers: process.env.TRAVIS ? ["ChromeTravis"] : ["ChromeHeadless"],
    customLaunchers: {
      ChromeTravis: { base: "Chrome", flags: ["--no-sandbox"] }
    },
    files: [{ pattern: "./test/index.js", watched: false }],
    preprocessors: { "./test/index.js": ["webpack", "sourcemap"] },
    frameworks: ["mocha", "chai"],
    reporters: ["progress"],
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
