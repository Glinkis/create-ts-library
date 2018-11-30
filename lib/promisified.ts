import { exec } from "child_process";
import glob from "glob";
import rimraf from "rimraf";
import { promisify } from "util";

export const execAsync = promisify(exec);

export const rimrafAsync = promisify(rimraf);

export const globAsync = promisify(glob);
