// tslint:disable
const dir = process.cwd();

module.exports = {
  roots: [`${dir}/src`, `${dir}/test`],
  transform: {
    ".ts$": "ts-jest"
  },
  testRegex: ".(test|spec).(t|j)s$",
  moduleFileExtensions: ["ts", "js", "json"]
};
