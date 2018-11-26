import fs from "fs";
import glob from "glob";
import ts from "typescript";
import { promisify } from "util";
import { abort, error, info } from "./console";

export const compileLibrary = async () => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    "tsconfig.lib.json",
  );

  if (!configPath) {
    throw abort("Could not find config file.");
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  if (config.extends) {
    const extendedConfigPath = ts.findConfigFile(
      __dirname,
      ts.sys.fileExists,
      config.extends,
    );

    if (!extendedConfigPath) {
      throw abort(`Could not find extension config ${config.extends}`);
    }

    const extended = JSON.parse(fs.readFileSync(extendedConfigPath, "utf8"));
    config.compilerOptions = {
      ...extended.compilerOptions,
      ...config.compilerOptions,
    };
  }

  if (config.compilerOptions.moduleResolution === "node") {
    config.compilerOptions.moduleResolution = ts.ModuleResolutionKind.NodeJs;
  } else if (config.compilerOptions.moduleResolution === "classic") {
    config.compilerOptions.moduleResolution = ts.ModuleResolutionKind.Classic;
  }

  compile(await promisify(glob)("src/**/*.ts"), config.compilerOptions);
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
