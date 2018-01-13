const webpack = require("webpack");

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
    browsers: ["ChromeHeadless"],
    files: [{ pattern: "./test/index_test.js", watched: false }],
    preprocessors: {
      "./test/index_test.js": ["webpack", "sourcemap"]
    },
    frameworks: ["mocha", "chai"],
    mime: {
      "text/x-typescript": ["ts"]
    },
    reporters: ["progress"],
    webpack: {
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
      },
      devtool: "eval-source-map" // Set to "eval" to get proper stack traces in terminal.
      /*plugins: [
        new webpack.SourceMapDevToolPlugin({
          filename: null, // if no value is provided the sourcemap is inlined
          test: /\.(ts|js)($|\?)/i // process .js and .ts files only
        })
      ]*/
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};
