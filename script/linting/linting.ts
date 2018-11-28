import fs from "fs";
import glob from "glob";
import { Configuration, Linter } from "tslint";
import { promisify } from "util";
import { logFailure, logFixed } from "./logging";

const config = `${__dirname}/../tslint.json`;
const linter = new Linter({
  fix: true,
  formatter: "json",
});

export const lint = async () => {
  const files = await promisify(glob)("{src,test}/**/*.ts");

  for (const file of files) {
    const fileContents = fs.readFileSync(file, "utf8");
    const { results } = Configuration.findConfiguration(config, file);
    linter.lint(file, fileContents, results);
  }

  const { fixes, failures } = linter.getResult();

  fixes && fixes.forEach(logFixed);
  failures.length && failures.forEach(logFailure);
};
