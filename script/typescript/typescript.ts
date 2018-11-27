import fs from "fs";
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
