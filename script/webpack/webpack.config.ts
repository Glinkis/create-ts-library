import path from "path";
import { Configuration } from "webpack";

export default {
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
        options: {
          configFile: path.resolve(__dirname, "../../tsconfig.webpack.json"),
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
} as Configuration;
