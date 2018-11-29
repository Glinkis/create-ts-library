import fs from "fs";
import { success } from "./console";
import { pack } from "./utils";

export const init = () => {
  const dir = process.cwd();

  const tsconfigPath = `${dir}/tsconfig.json`;
  if (!fs.existsSync(tsconfigPath)) {
    fs.writeFileSync(tsconfigPath, tsconfigTemplate, "utf8");
    success("Created tsconfig.json");
  }

  const tslintPath = `${dir}/tslint.json`;
  if (!fs.existsSync(tslintPath)) {
    fs.writeFileSync(tslintPath, tslintTemplate, "utf8");
    success("Created tslint.json");
  }

  const srcDir = `${dir}/src`;
  const srcPath = `${srcDir}/index.ts`;
  if (!fs.existsSync(srcPath)) {
    if (!fs.existsSync(srcDir)) {
      fs.mkdirSync(srcDir);
    }
    fs.writeFileSync(srcPath, "", "utf8");
    success("Created src/index.ts");
  }

  const testDir = `${dir}/test`;
  const testPath = `${testDir}/index.test.ts`;
  if (!fs.existsSync(testPath)) {
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir);
    }
    fs.writeFileSync(testPath, "", "utf8");
    success("Created test/index.test.ts");
  }
};

const tsconfigTemplate = `{
  "extends": "${pack.name}/tsconfig"
}\n`;

const tslintTemplate = `{
  "extends": "${pack.name}/tslint"
}\n`;
