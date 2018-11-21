import { Configuration } from "webpack";
import pack from "../package";
import config from "./config";

export default {
  ...config,
  output: {
    ...config.output,
    filename: `${pack.name}.${pack.version}.js`,
  },
} as Configuration;
