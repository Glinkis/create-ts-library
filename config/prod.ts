import { Configuration } from "webpack";
// @ts-ignore
import { name, version } from "../package.json";
import config from "./config";

export default {
  ...config,
  mode: "production",
  output: {
    ...config.output,
    filename: `${name}.${version}.min.js`,
  },
} as Configuration;
