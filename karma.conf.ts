module.exports = function(config: any) {
  config.set({
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
      'karma-ie-launcher'
    ],
    browsers: [/*'IE', 'Chrome', 'Firefox', 'Safari',*/ 'PhantomJS'],
    files: [
      "src/**/*.js",
      "test/**/*.js"
    ],
    preprocessors: {
      'src/**/*.js': ['webpack'],
      'test/**/*.js': ['webpack']
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.js/,
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
