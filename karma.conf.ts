export default (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: [
      "src/**/*.ts",
      "test/**/*.ts",
    ],
    frameworks: ["mocha", "chai", "karma-typescript"],
    plugins: [
      "karma-mocha",
      "karma-chai",
      "karma-phantomjs-launcher",
      /*"karma-chrome-launcher",*/
      /*"karma-firefox-launcher",*/
      /*"karma-safari-launcher",*/
      /*"karma-ie-launcher"*/
    ],
    preprocessors: {
      "**/*.ts": ["karma-typescript"],
    },
    reporters: ["progress"],
  });
};
