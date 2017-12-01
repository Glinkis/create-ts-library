const path = require("path");

const exclude = [
  /node_modules/,
  /test/
];

module.exports = {
  entry: path.resolve(__dirname, "docs/src/index.tsx"),
  output: {
    filename: "docs.min.js",
    path: path.resolve(__dirname, "docs"),
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        use: "awesome-typescript-loader",
        exclude,
      },
      {
        test: /\.json$/,
        use: "json-loader",
        exclude,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    publicPath: "/",
    contentBase: "docs",
    historyApiFallback: true,
  },
};
