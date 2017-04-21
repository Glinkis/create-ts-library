const exclude = [
  'node_modules',
];

module.exports = {
  devtool: 'source-map',
  entry: './docs/index.js',
  output: {
    filename: 'index.min.js',
    path: __dirname + '/docs',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
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
