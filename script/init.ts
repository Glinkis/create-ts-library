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
};

const tsconfigTemplate = `{
  "extends": "${pack.name}/tsconfig"
}\n`;

const tslintTemplate = `{
  "extends": "${pack.name}/tslint"
}\n`;
