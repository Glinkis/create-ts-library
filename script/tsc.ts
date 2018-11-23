import chalk from "chalk";
import fs from "fs";
import glob from "glob";
import ts from "typescript";
import { abort, error, errorTitle, info, successTitle } from "./console";

export const compileLib = () => {
  glob("src/**/*.ts", (err, files) => {
    if (err != null) {
      abort(err);
    }

    const configPath = ts.findConfigFile(
      __dirname,
      ts.sys.fileExists,
      "tsconfig.lib.json",
    );

    if (!configPath) {
      error("Could not find config file.");
      return;
    }

    const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

    if (config.extends) {
      const extendedConfigPath = ts.findConfigFile(
        __dirname,
        ts.sys.fileExists,
        config.extends,
      );

      if (!extendedConfigPath) {
        error(`Could not find extension config ${config.extends}`);
        return;
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

    compile(files, config.compilerOptions);
  });
};

function compile(fileNames: string[], options: ts.CompilerOptions): void {
  const program = ts.createProgram(fileNames, options);
  const emitResult = program.emit();

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .filter(({ file }) => file && !file.fileName.includes("node_modules"))
    .concat(emitResult.diagnostics);

  if (diagnostics.length) {
    errorTitle("Error!");
    diagnostics.forEach(logDiagnostic);
  } else {
    successTitle("Success!");
  }
}

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
