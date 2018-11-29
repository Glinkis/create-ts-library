import { exec } from "child_process";
import { readFileSync } from "fs";
import { promisify } from "util";
import { error, info, success } from "./console";

const execAsync = promisify(exec);

/**
 * Installs packages if they are not already available.
 * @param name Package name.
 */
export const verifyPackages = async (...names: string[]) => {
  for (const name of names) {
    try {
      require(`${name}/package.json`);
    } catch (err) {
      error(`Cannot find package ${name}`);
      info("Attempting to install.");
      try {
        await execAsync(`npm i -D ${name}@${getVersion(name)}`);
        success(`Installed package ${name}.`);
      } catch (err) {
        error(err);
      }
    }
  }
};

export const pack = JSON.parse(
  readFileSync(`${__dirname}/../package.json`, "utf8"),
);

const getVersion = (name: string) => {
  const { dependencies, devDependencies } = pack;

  if (name in dependencies) {
    return dependencies[name].replace("^", "");
  }

  if (name in devDependencies) {
    return devDependencies[name].replace("^", "");
  }

  return "latest";
};
