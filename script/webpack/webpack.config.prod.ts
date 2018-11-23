import path from "path";
import DtsBundlePlugin from "webpack-dts-bundle";
import merge from "webpack-merge";
import pack from "../package";
import config from "./webpack.config";

export default merge(config, {
  mode: "production",
  output: {
    filename: `${pack.name}.${pack.version}.min.js`,
  },
  plugins: [
    new DtsBundlePlugin({
      name: pack.name,
      main: path.resolve(__dirname, "../../dist/index.d.ts"),
      out: path.resolve(__dirname, "../../dist/index.d.ts"),
      removeSource: true,
    }),
  ],
});
