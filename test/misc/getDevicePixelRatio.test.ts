import { expect } from "chai";
import * as mocha from "mocha";
import { getDevicePixelRatio } from "../../src/misc/getDevicePixelRatio";

describe("misc/getDevicePixelRatio", () => {
  it("returns a number", () => {
    expect(getDevicePixelRatio()).to.be.a("number");
  });
});
