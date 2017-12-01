module.exports = (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: ["src/**/*.ts", "test/**/*.ts"],
    frameworks: ["mocha", "chai", "karma-typescript"],
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json"
    },
    plugins: [
      "karma-typescript",
      "karma-mocha",
      "karma-chai",
      "karma-phantomjs-launcher"
      /*"karma-chrome-launcher",*/
      /*"karma-firefox-launcher",*/
      /*"karma-safari-launcher",*/
      /*"karma-ie-launcher"*/
    ],
    preprocessors: {
      "src/**/*.ts": ["karma-typescript"],
      "test/**/*.ts": ["karma-typescript"]
    },
    reporters: ["progress", "karma-typescript"]
  });
};
