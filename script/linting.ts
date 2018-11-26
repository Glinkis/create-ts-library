import fs from "fs";
import glob from "glob";
import { Configuration, Linter, RuleFailure } from "tslint";
import { promisify } from "util";
import { error, success, warning } from "./console";

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

const logFixed = (failure: RuleFailure) => {
  success(`FIXED: ${failureToString(failure)}`);
};

const logFailure = (failure: RuleFailure) => {
  const severity = failure.getRuleSeverity();
  const message = `${severity}: ${failureToString(failure)}`;

  if (severity === "warning") {
    warning(message);
  } else if (severity === "error") {
    error(message);
  }
};

const failureToString = (failure: RuleFailure) => {
  const fileName = failure.getFileName();
  const startPosition = failure.getStartPosition();
  const { line, character } = startPosition.getLineAndCharacter();
  const description = failure.getFailure();
  const location = `${fileName}(${line + 1}, ${character + 1})`;

  return `${location}: ${description}`;
};
