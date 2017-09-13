import { expect } from "chai";
import { getDevicePixelRatio } from "../../src/misc/getDevicePixelRatio";

describe("misc/getDevicePixelRatio", () => {
  it("is a function", () => {
    expect(getDevicePixelRatio).is.a("function");
  });

  it("returns a number", () => {
    expect(getDevicePixelRatio()).to.be.a("number");
  });
});
