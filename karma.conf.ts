module.exports = (config: any) => {
  config.set({
    browsers: [/*"IE", "Chrome", "Firefox", "Safari",*/ "PhantomJS"],
    files: ["test/**/*test.ts"],
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
