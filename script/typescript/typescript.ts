import ts, { CompilerOptions } from "typescript";
import { abort } from "../console";
import { logDiagnostic, logWatchStatusChanged } from "./logging";

const dir = process.cwd();

export const compileTypescript = async (configFile: string, watch: boolean) => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    configFile,
  );

  if (!configPath) {
    throw abort(`Could not find config file ${configFile}.`);
  }

  const config = readConfigFile(configPath);
  const { fileNames, options } = parseConfig(config);

  if (watch) {
    createWatchProgram(fileNames, options);
  } else {
    createProgram(fileNames, options);
  }
};

const createWatchProgram = (fileNames: string[], options: CompilerOptions) => {
  const host = ts.createWatchCompilerHost(
    fileNames,
    options,
    ts.sys,
    ts.createEmitAndSemanticDiagnosticsBuilderProgram,
    logDiagnostic,
    logWatchStatusChanged,
  );

  ts.createWatchProgram(host);
};

const createProgram = (fileNames: string[], options: CompilerOptions) => {
  const program = ts.createProgram(fileNames, options);
  const result = program.emit();

  const diagnostics = ts
    .getPreEmitDiagnostics(program)
    .concat(result.diagnostics)
    .filter(({ file }) => file && !file.fileName.includes("node_modules"));

  if (diagnostics.length) {
    diagnostics.forEach(logDiagnostic);
    process.exit();
  }
};

const readConfigFile = (configPath: string) => {
  const { error, config } = ts.readConfigFile(configPath, ts.sys.readFile);

  if (error) {
    logDiagnostic(error);
    process.exit();
  }

  return config;
};

const parseConfig = (config: any) => {
  const content = ts.parseJsonConfigFileContent(config, ts.sys, dir);

  if (content.errors.length) {
    content.errors.forEach(logDiagnostic);
    process.exit();
  }

  return content;
};
