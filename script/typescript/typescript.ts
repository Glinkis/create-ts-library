import ts from "typescript";
import { abort } from "../console";
import { logDiagnostic, logWatchStatusChanged } from "./logging";

export const compileTypescript = async (configFile: string, watch: boolean) => {
  const configPath = ts.findConfigFile(
    __dirname,
    ts.sys.fileExists,
    configFile,
  );

  if (!configPath) {
    throw abort(`Could not find config file ${configFile}.`);
  }

  if (watch) {
    createWatchProgram(configPath);
  } else {
    createProgram(configPath);
  }
};

const createWatchProgram = (configPath: string) => {
  const host = ts.createWatchCompilerHost(
    configPath,
    {},
    ts.sys,
    ts.createEmitAndSemanticDiagnosticsBuilderProgram,
    logDiagnostic,
    logWatchStatusChanged,
  );

  ts.createWatchProgram(host);
};

const createProgram = (configPath: string) => {
  const config = readConfigFile(configPath);
  const content = parseConfig(config);
  const program = ts.createProgram(content.fileNames, content.options);
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
  const file = ts.readConfigFile(configPath, ts.sys.readFile);

  if (file.error) {
    logDiagnostic(file.error);
    process.exit();
  }

  return file.config;
};

const parseConfig = (config: any) => {
  const content = ts.parseJsonConfigFileContent(config, ts.sys, process.cwd());

  if (content.errors.length) {
    content.errors.forEach(logDiagnostic);
    process.exit();
  }

  return content;
};
