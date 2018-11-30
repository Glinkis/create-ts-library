import merge from "webpack-merge";
import pack from "../package";
import config from "./webpack.config";

export default merge(config, {
  mode: "development",
  output: {
    filename: `${pack.name}.${pack.version}.js`,
  },
});
