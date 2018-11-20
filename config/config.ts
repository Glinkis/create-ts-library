import { Configuration } from "webpack";

export default {
  mode: "development",
  devtool: "source-map",
  output: {
    library: "sample", // library API name
    libraryTarget: "umd", // universal module definition
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
} as Configuration;
