module.exports = config => {
  config.set({
    basePath: "",
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
      devtool: "eval",
      module: {
        rules: [
          {
            test: /\.(js|ts)$/,
            loader: "ts-loader",
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
