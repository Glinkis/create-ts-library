import fs from "fs";
import glob from "glob";
import ts from "typescript";
import { promisify } from "util";
import { abort, error, info } from "./console";

export const compileLibrary = async (configFile: string) => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    configFile,
  );

  if (!configPath) {
    throw abort(`Could not find config file ${configFile}.`);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

  parseExtends(config);
  parseModuleResolution(config);
  parseModule(config);

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

const parseExtends = (config: any) => {
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
};

const parseModuleResolution = (config: any) => {
  if (config.compilerOptions.moduleResolution === "node") {
    config.compilerOptions.moduleResolution = ts.ModuleResolutionKind.NodeJs;
  } else if (config.compilerOptions.moduleResolution === "classic") {
    config.compilerOptions.moduleResolution = ts.ModuleResolutionKind.Classic;
  }
};

const parseModule = (config: any) => {
  switch (config.compilerOptions.module.toLowerCase()) {
    case "none":
      config.compilerOptions.module = ts.ModuleKind.None;
      break;
    case "amd":
      config.compilerOptions.module = ts.ModuleKind.AMD;
      break;
    case "umd":
      config.compilerOptions.module = ts.ModuleKind.UMD;
      break;
    case "system":
      config.compilerOptions.module = ts.ModuleKind.System;
      break;
    case "es2015":
      config.compilerOptions.module = ts.ModuleKind.ES2015;
      break;
    case "esnext":
      config.compilerOptions.module = ts.ModuleKind.ESNext;
      break;
  }
};
