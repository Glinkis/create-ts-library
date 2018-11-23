import path from "path";
import { Configuration } from "webpack";
import DtsBundlePlugin from "webpack-dts-bundle";
import pack from "../package";

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
  plugins: [
    new DtsBundlePlugin({
      name: pack.name,
      main: path.resolve(__dirname, "../../dist/index.d.ts"),
      out: path.resolve(__dirname, "../../dist/index.d.ts"),
      removeSource: true,
    }),
  ],
  resolve: {
    extensions: [".js", ".ts"],
  },
} as Configuration;
