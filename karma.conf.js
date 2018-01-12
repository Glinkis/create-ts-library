// tslint:disable-next-line:no-var-requires
const webpack = require("webpack");

module.exports = config => {
  config.set({
    browsers: ["ChromeHeadless"],
    files: ["test/**/*test.ts"],
    frameworks: ["mocha", "chai"],
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-chrome-launcher"
    ],
    preprocessors: {
      "src/**/*.ts": ["webpack"],
      "test/**/*.ts": ["webpack"]
    },
    mime: {
      "text/x-typescript": ["ts"]
    },
    reporters: ["progress"],
    webpack: {
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            exclude: /node_modules/,
            loader: "ts-loader",
            options: {
              compilerOptions: {
                allowJs: true,
                declaration: false
              }
            },
            test: /\.(js|ts)/
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
