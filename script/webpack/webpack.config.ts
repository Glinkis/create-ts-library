import path from "path";
import { Configuration } from "webpack";
import DtsBundlePlugin from "webpack-dts-bundle";
import pack from "../package";

const dir = process.cwd();

export default {
  devtool: "source-map",
  // Since we're not using a typescript loader, the entry has
  // to be the directory that the source is compiled to.
  entry: path.resolve(dir, "dist/es"),
  output: {
    // Library API name.
    library: pack.config.library,
    // Universal module definition.
    libraryTarget: "umd",
  },
  plugins: [
    // Bundles the type definitions into a single file.
    new DtsBundlePlugin({
      name: pack.config.library,
      main: path.resolve(dir, "dist/types/index.d.ts"),
      out: path.resolve(dir, `dist/${pack.name}.${pack.version}.d.ts`),
      removeSource: false,
    }),
  ],
} as Configuration;
