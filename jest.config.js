// tslint:disable
module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: {
    ".ts$": "ts-jest"
  },
  testRegex: ".(test|spec).(t|j)s$",
  moduleFileExtensions: ["ts", "js", "json"]
};
