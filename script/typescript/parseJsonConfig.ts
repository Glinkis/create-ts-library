import fs from "fs";
import ts from "typescript";
import { abort } from "../console";

export const parseJsonConfig = (json: string) => {
  const config = JSON.parse(json);
  const options = config.compilerOptions;

  return {
    ...config,
    compilerOptions: {
      ...parseExtension(config.extends),
      ...config.compilerOptions,
      moduleResolution: parseModuleResolution(options.moduleResolution),
      module: parseModule(options.module),
      target: parseTarget(options.target),
    },
  };
};

const parseExtension = (fileName?: string): object => {
  if (!fileName) {
    return {};
  }

  const configPath = ts.findConfigFile(__dirname, ts.sys.fileExists, fileName);

  if (!configPath) {
    throw abort(`Could not find extension config ${fileName}`);
  }

  const json = fs.readFileSync(configPath, "utf8");
  const config = JSON.parse(json);

  return {
    ...config.compilerOptions,
    // Keep recursing until no longer extending.
    ...parseExtension(config.extends),
  };
};

const parseModuleResolution = (moduleResolution = "") => {
  switch (moduleResolution.toLowerCase()) {
    case "node":
      return ts.ModuleResolutionKind.NodeJs;
    case "classic":
      return ts.ModuleResolutionKind.Classic;
  }
};

const parseModule = (module = "") => {
  switch (module.toLowerCase()) {
    case "none":
      return ts.ModuleKind.None;
    case "amd":
      return ts.ModuleKind.AMD;
    case "umd":
      return ts.ModuleKind.UMD;
    case "system":
      return ts.ModuleKind.System;
    case "es2015":
      return ts.ModuleKind.ES2015;
    case "esnext":
      return ts.ModuleKind.ESNext;
  }
};

const parseTarget = (target = "") => {
  switch (target.toLowerCase()) {
    case "es3":
      return ts.ScriptTarget.ES3;
    case "es5":
      return ts.ScriptTarget.ES5;
    case "es6":
    case "es2015":
      return ts.ScriptTarget.ES2015;
    case "es2016":
      return ts.ScriptTarget.ES2016;
    case "es2017":
      return ts.ScriptTarget.ES2017;
    case "es2018":
      return ts.ScriptTarget.ES2018;
    case "esnext":
      return ts.ScriptTarget.ESNext;
  }
};
