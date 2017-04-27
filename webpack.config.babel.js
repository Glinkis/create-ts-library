const exclude = ["node_modules"];

module.exports = {
  entry: "./docs/src/index.js",
  output: {
    filename: "docs.min.js",
    path: __dirname + "/docs"
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: exclude
      },
      {
        test: /\.json$/,
        use: "json-loader",
        exclude: exclude
      }
    ],
  },
  devServer: {
    publicPath: "/",
    contentBase: "docs",
    historyApiFallback: true
  }
};
