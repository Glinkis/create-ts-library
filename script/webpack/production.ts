import { Configuration } from "webpack";
import pack from "../package";
import config from "./config";

export default {
  ...config,
  mode: "production",
  output: {
    ...config.output,
    filename: `${pack.name}.${pack.version}.min.js`,
  },
} as Configuration;
