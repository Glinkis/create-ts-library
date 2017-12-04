module.exports = (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: ["src/**/*.ts", "test/**/*.ts", "test/**/*.js"],
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
      "src/**/*.ts": ["webpack"],
      "test/**/*.ts": ["webpack"],
      "test/**/*.js": ["webpack"]
    },
    reporters: ["progress"],
    webpackMiddleware: {
      noInfo: true
    },
    webpack: {
      devtool: false,
      module: {
        rules: [
          {
            exclude: /node_modules/,
            loader: "ts-loader",
            options: {
              compilerOptions: {
                declaration: false,
                allowJs: true
              }
            },
            test: /\.(js|ts)/
          }
        ]
      },
      resolve: {
        extensions: [".js", ".ts"]
      }
    }
  });
};
