import { readFileSync } from "fs";
import { error, info, success } from "./console";
import { execAsync } from "./promisified";

/**
 * Installs packages if they are not already available.
 * @param name Package name.
 */
export const verifyPackages = async (...names: string[]) => {
  for (const name of names) {
    try {
      await import(`${name}/package.json`);
      continue;
    } catch (err) {
      error(`Cannot find package ${name}`);
    }

    info("Attempting to install.");

    try {
      await execAsync(`npm i -D ${name}${getPackageVersion(name)}`);
      success(`Installed package ${name}.\n`);
    } catch (err) {
      error(err);
    }
  }
};

/**
 * Get the current version of a package dependency.
 * @param name Package name.
 */
export const getPackageVersion = (name: string) => {
  const { dependencies, devDependencies } = pack;

  if (name in dependencies) {
    return `@${dependencies[name].replace("^", "")}`;
  }

  if (name in devDependencies) {
    return `@${devDependencies[name].replace("^", "")}`;
  }

  return "";
};

export const pack = JSON.parse(
  readFileSync(`${__dirname}/../package.json`, "utf8"),
);
