import * as path from "path";

const exclude = [
  /node_modules/,
  /test/
];

export default {
  devServer: {
    contentBase: "docs",
    historyApiFallback: true,
    publicPath: "/",
  },
  entry: path.resolve(__dirname, "docs/src/index.tsx"),
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "ReactRouterDOM"
  },
  module: {
    rules: [
      {
        exclude,
        test: /\.(tsx|ts|js)$/,
        use: "awesome-typescript-loader",
      },
      {
        exclude,
        test: /\.json$/,
        use: "json-loader",
      },
    ],
  },
  output: {
    filename: "docs.min.js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
