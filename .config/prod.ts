import { Configuration } from "webpack";
// @ts-ignore
import packageJson from "../package.json";
import { defaultConfig } from "./config";

const config: Configuration = {
  ...defaultConfig,
  mode: "production",
  output: {
    ...defaultConfig.output,
    filename: `${packageJson.name}.min.js`,
  },
};

export default config;
