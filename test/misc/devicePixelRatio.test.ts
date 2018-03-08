import { expect } from "chai";
import * as mocha from "mocha";
import { devicePixelRatio } from "../../src/misc/devicePixelRatio";

describe("devicePixelRatio", () => {
  it("returns a number", () => {
    expect(devicePixelRatio()).to.be.a("number");
  });
});
