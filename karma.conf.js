const webpack = require("webpack");

/**
 * Webpack Configuration
 */
const webpackConfig = {
  mode: "development",
  /* Use this to get nice stack traces. */
  devtool: "eval",
  /* Use this to debug in browser. */
  // devtool: "eval-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: [".js", ".ts"] }
};

/**
 * Karma Configuration
 */
module.exports = config => {
  config.set({
    basePath: "",
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-sourcemap-loader"
    ],
    browsers: process.env.TRAVIS ? ["Chrome_travis_ci"] : ["ChromeHeadless"],
    customLaunchers: {
      Chrome_travis_ci: { base: "Chrome", flags: ["--no-sandbox"] }
    },
    files: [{ pattern: "./test/index.js", watched: false }],
    preprocessors: { "./test/index.js": ["webpack", "sourcemap"] },
    frameworks: ["mocha", "chai"],
    reporters: ["progress"],
    specReporter: {
      maxLogLines: Infinity, // Limit number of lines logged per test.
      showSpecTiming: true, // Print the time elapsed for each spec.
      failFast: true // Test would finish with error when a first fail occurs.
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
