import fs from "fs";
import ts from "typescript";
import { abort, error, info } from "../console";

export const compileTypescript = async (configFile: string) => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    configFile,
  );

  if (!configPath) {
    throw abort(`Could not find config file ${configFile}.`);
  }

  const json = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const config = ts.parseJsonConfigFileContent(json, ts.sys, process.cwd());

  if (config.errors.length) {
    config.errors.forEach(logDiagnostic);
    process.exit();
  }

  const program = ts.createProgram(config.fileNames, config.options);
  const emitResult = program.emit();

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .filter(({ file }) => file && !file.fileName.includes("node_modules"))
    .concat(emitResult.diagnostics);

  if (diagnostics.length) {
    diagnostics.forEach(logDiagnostic);
    process.exit();
  }
};

const logDiagnostic = (diagnostic: ts.Diagnostic) => {
  const { code, file, start, messageText } = diagnostic;

  if (!file) {
    info(`${ts.flattenDiagnosticMessageText(messageText, "\n")}`);
    return;
  }

  const { line, character } = file.getLineAndCharacterOfPosition(start!);
  const message = ts.flattenDiagnosticMessageText(messageText, "\n");

  info(`${file.fileName}(${line + 1},${character + 1})`);
  error(`TS${code}: ${message}`);
};
