import ts from "typescript";
import { error, info } from "../console";

export const logDiagnostic = (diagnostic: ts.Diagnostic) => {
  const { code, file, start, messageText } = diagnostic;

  if (!file) {
    info(`${messageText}\n`);
    return;
  }

  const { line, character } = file.getLineAndCharacterOfPosition(start!);

  info(`${file.fileName}(${line + 1},${character + 1})`);
  error(`TS${code}: ${messageText}\n`);
};

export const logWatchStatusChanged = (diagnostic: ts.Diagnostic) => {
  info(`${diagnostic.messageText}\n`);
};
