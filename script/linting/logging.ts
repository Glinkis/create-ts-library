import { RuleFailure } from "tslint";
import { error, success, warning } from "../console";

export const logFixed = (failure: RuleFailure) => {
  success(`FIXED: ${failureToString(failure)}`);
};

export const logFailure = (failure: RuleFailure) => {
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
  const location = `${fileName}(${line + 1}, ${character + 1})`;
  const description = failure.getFailure();
  return `${location}: ${description}`;
};
