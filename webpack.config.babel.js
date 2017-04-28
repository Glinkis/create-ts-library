const exclude = ["node_modules"];

module.exports = {
  entry: "./docs/src/index.js",
  output: {
    filename: "docs.min.js",
    path: __dirname + "/docs",
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM",
    "prismjs": "Prism",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: exclude,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              ['es2015', { modules: false }],
              "react",
            ],
          },
        }],
      },
      {
        test: /\.json$/,
        use: "json-loader",
        exclude: exclude,
      },
    ],
  },
  devServer: {
    publicPath: "/",
    contentBase: "docs",
    historyApiFallback: true,
  },
};
