import * as chai from "chai";
import { getDevicePixelRatio } from "../../src/misc/getDevicePixelRatio";

const { expect } = chai;

describe("misc/getDevicePixelRatio", () => {
  it("is a function", () => {
    expect(getDevicePixelRatio).is.a("function");
  });

  // TODO: More extensive tests.
});
