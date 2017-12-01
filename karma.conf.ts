module.exports = (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: ["src/**/*.ts", "test/**/*.ts"],
    frameworks: ["mocha", "chai"],
    plugins: [
      "karma-webpack",
      "karma-mocha",
      "karma-chai",
      "karma-phantomjs-launcher"
      /*"karma-chrome-launcher",*/
      /*"karma-firefox-launcher",*/
      /*"karma-safari-launcher",*/
      /*"karma-ie-launcher"*/
    ],
    preprocessors: {
      "test/**/*.js": ["webpack"],
      "test/**/*.ts": ["webpack"]
    },
    reporters: ["progress"],
    webpack: {
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            exclude: /node_modules/,
            loader: "ts-loader",
            test: /\.(js|ts)/
          }
        ]
      },
      resolve: {
        extensions: [".ts"]
      }
    }
  });
};
