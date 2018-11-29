import { Diagnostic } from "typescript";
import { error, info } from "../console";

export const logDiagnostic = (diagnostic: Diagnostic) => {
  const { code, file, start, messageText } = diagnostic;
  const message = `TS${code}: ${messageText}\n`;

  if (file) {
    const { line, character } = file.getLineAndCharacterOfPosition(start!);
    info(`${file.fileName}(${line + 1},${character + 1})`);
  }

  error(message);
};

export const logWatchStatusChanged = (diagnostic: Diagnostic) => {
  info(`${diagnostic.messageText}\n`);
};
