import * as chai from "chai";
import { getDevicePixelRatio } from "../../src/misc/getDevicePixelRatio";

const { expect } = chai;

describe("misc/getDevicePixelRatio", () => {
  it("is a function", () => {
    expect(getDevicePixelRatio).is.a("function");
  });

  it("returns a number", () => {
    expect(getDevicePixelRatio()).to.be.a("number");
  });
});
