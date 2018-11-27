import ts from "typescript";
import { error, info } from "../console";

export const logDiagnostic = (diagnostic: ts.Diagnostic) => {
  const { code, file, start, messageText } = diagnostic;
  const message = `TS${code}: ${messageText}\n`;

  if (file) {
    const { line, character } = file.getLineAndCharacterOfPosition(start!);
    info(`${file.fileName}(${line + 1},${character + 1})`);
  }

  error(message);
};

export const logWatchStatusChanged = (diagnostic: ts.Diagnostic) => {
  info(`${diagnostic.messageText}\n`);
};
