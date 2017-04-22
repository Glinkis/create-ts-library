const exclude = [
  'node_modules',
];

module.exports = {
  devtool: 'source-map',
  entry: './docs/index.js',
  output: {
    filename: 'docs.min.js',
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: exclude
      }, {
        test: /\.json$/,
        use: 'json-loader',
        exclude: exclude
      }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: 'docs',
    historyApiFallback: true,
  }
};
