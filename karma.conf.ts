module.exports = function(config: any) {
  config.set({
    frameworks: ['mocha', 'chai'],
    reporters: ['progress'],
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: false,
      showSpecTiming: false,
      failFast: true
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-ie-launcher',
      'karma-spec-reporter'
    ],
    browsers: [/*'IE', 'Chrome', 'Firefox', 'Safari',*/ 'PhantomJS'],
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack'],
      'test/**/*.ts': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.(js|ts)/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'minimal'
    }
  });
};
