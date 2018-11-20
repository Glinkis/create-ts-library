import { Configuration } from "webpack";
// @ts-ignore
import packageJson from "../package.json";
import config from "./config";

export default {
  ...config,
  mode: "production",
  output: {
    ...config.output,
    filename: `${packageJson.name}.min.js`,
  },
} as Configuration;
