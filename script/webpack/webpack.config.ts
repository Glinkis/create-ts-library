import path from "path";
import { Configuration } from "webpack";
import DtsBundlePlugin from "webpack-dts-bundle";
import pack from "../package";

const dir = process.cwd();

export default {
  devtool: "source-map",
  entry: path.resolve(dir, "dist/es"),
  output: {
    library: "sample", // library API name
    libraryTarget: "umd", // universal module definition
  },
  plugins: [
    new DtsBundlePlugin({
      name: pack.name,
      main: path.resolve(dir, "dist/types/index.d.ts"),
      out: path.resolve(dir, `dist/${pack.name}.${pack.version}.d.ts`),
      removeSource: false,
    }),
  ],
} as Configuration;
