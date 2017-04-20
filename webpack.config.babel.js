const exclude = [
  'node_modules',
];

export default {
  devtool: 'inline',
  entry: './docs/index.js',
  output: {
    filename: './docs/index.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: exclude
      }
    ]
  }
};
