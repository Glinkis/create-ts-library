import { expect } from "chai";
import { RGBtoHSL } from "../../src/math/RGBtoHSL";

describe("math/RGBtoHSL", () => {
  it("is a function", () => {
    expect(RGBtoHSL).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(RGBtoHSL(0, 0, 0)).to.deep.equals({ h: 0, s: 0, l: 0 });
    expect(RGBtoHSL(255, 0, 0)).to.deep.equals({ h: 0, s: 1, l: 0.5 });
    expect(RGBtoHSL(255, 255, 255)).to.deep.equals({ h: 0, s: 0, l: 1 });
  });
});
