import fs from "fs";
import { abort } from "./console";

const pack = JSON.parse(
  fs.readFileSync(`${process.cwd()}/package.json`, "utf8"),
);

if (!pack.name) {
  throw abort("Could not find 'name' in package.json");
} else if (typeof pack.name !== "string") {
  throw abort("package.json: name is not a string.");
}

if (!pack.version) {
  throw abort("Could not find 'version' in package.json");
} else if (typeof pack.version !== "string") {
  throw abort("package.json: config is not a string.");
}

if (!pack.config) {
  throw abort("Could not find 'config' in package.json");
} else if (typeof pack.config !== "object") {
  throw abort("package.json: config is not an object.");
}

if (!pack.config.library) {
  throw abort("Could not find 'config/library' in package.json");
} else if (typeof pack.config.library !== "string") {
  throw abort("package.json: config/library is not a string.");
}

export default pack as {
  name: string;
  version: string;
  config: {
    library: string;
  };
};
