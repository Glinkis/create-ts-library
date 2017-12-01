export default (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],
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
      "src/**/*.js": ["webpack"],
      "test/**/*.js": ["webpack"]
    },
    reporters: ["progress"],
    webpack: {
      module: {
        rules: [
          {
            exclude: /node_modules/,
            loader: "awesome-typescript-loader",
            test: /\.(js|ts)/
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: "minimal"
    }
  });
};
