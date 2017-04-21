const HtmlWebpackPlugin = require('html-webpack-plugin');

const exclude = [
  'node_modules',
];

module.exports = {
  devtool: 'source-map',
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
  },
  devServer: {
    contentBase: 'docs',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './docs/index.html',
      template: './docs/template.html',
      inject: 'body',
    })
  ],
};
