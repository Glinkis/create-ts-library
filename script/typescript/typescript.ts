import fs from "fs";
import glob from "glob";
import ts from "typescript";
import { promisify } from "util";
import { abort, error, info } from "../console";
import { parseJsonConfig } from "./parseJsonConfig";

export const compileTypescript = async (configFile: string) => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    configFile,
  );

  if (!configPath) {
    throw abort(`Could not find config file ${configFile}.`);
  }

  const json = fs.readFileSync(configPath, "utf8");
  const config = parseJsonConfig(json);
  const files = await promisify(glob)("src/**/*.ts");

  compile(files, config.compilerOptions);
};

const compile = (fileNames: string[], options: ts.CompilerOptions) => {
  const program = ts.createProgram(fileNames, options);
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
