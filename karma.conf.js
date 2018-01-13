const webpack = require("webpack");

module.exports = config => {
  config.set({
    basePath: "",
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-sourcemap-loader",
      "karma-mocha-reporter"
    ],
    browsers: ["ChromeHeadless"],
    files: [{ pattern: "./test/index_test.js", watched: false }],
    preprocessors: {
      "./test/index_test.js": ["webpack", "sourcemap"]
    },
    frameworks: ["mocha", "chai"],
    mime: {
      "text/x-typescript": ["ts"]
    },
    reporters: ["mocha"],
    webpack: {
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
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
          }
        ]
      },
      resolve: {
        extensions: [".js", ".ts"]
      }
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
