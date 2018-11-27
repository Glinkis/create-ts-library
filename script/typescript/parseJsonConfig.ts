import fs from "fs";
import ts from "typescript";
import { abort } from "../console";

export const parseJsonConfig = (json: string) => {
  const config = JSON.parse(json);
  parseExtends(config);
  parseModuleResolution(config);
  parseModule(config);
  return config;
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
