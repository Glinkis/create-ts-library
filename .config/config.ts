import { Configuration, Rule } from "webpack";

export const tsLoader: Rule = {
  test: /\.ts$/,
  loader: "ts-loader",
  exclude: /node_modules/,
};

export const defaultConfig: Configuration = {
  mode: "development",
  devtool: "source-map",
  output: {
    library: "sample", // library API name
    libraryTarget: "umd", // universal module definition
  },
  module: {
    rules: [tsLoader],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
