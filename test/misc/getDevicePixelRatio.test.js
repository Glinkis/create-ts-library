import { expect } from "chai";
import { getDevicePixelRatio } from "../../src/misc/getDevicePixelRatio";

describe("misc/getDevicePixelRatio", () => {
  it("returns a number", () => {
    expect(getDevicePixelRatio()).to.be.a("number");
  });
});
