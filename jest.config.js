// tslint:disable
module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/test"],
  transform: {
    ".ts$": "ts-jest"
  },
  testRegex: ".test.ts$",
  moduleFileExtensions: ["ts", "js", "json"]
};
