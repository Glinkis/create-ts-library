import path from "path";
import { Configuration } from "webpack";
import DtsBundlePlugin from "webpack-dts-bundle";
import pack from "../package";

export default {
  devtool: "source-map",
  entry: path.resolve(process.cwd(), "dist/es"),
  output: {
    library: "sample", // library API name
    libraryTarget: "umd", // universal module definition
  },
  plugins: [
    new DtsBundlePlugin({
      name: pack.name,
      main: path.resolve(__dirname, "../../dist/types/index.d.ts"),
      out: path.resolve(__dirname, "../../dist/index.d.ts"),
      removeSource: false,
    }),
  ],
} as Configuration;
