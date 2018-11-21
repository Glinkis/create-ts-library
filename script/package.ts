import fs from "fs";
import { path } from ".";
import { abort } from "./console";

const pack = JSON.parse(fs.readFileSync(`${path}/package.json`, "utf8"));

if (!pack.name || typeof pack.name !== "string") {
  abort("Could not find 'name' in package.json");
}

if (!pack.version || typeof pack.version !== "string") {
  abort("Could not find 'version' in package.json");
}

export default pack as {
  name: string;
  version: string;
};
