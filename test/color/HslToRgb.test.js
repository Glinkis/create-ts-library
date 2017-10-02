import { expect } from "chai";
import { HslToRgb } from "../../src/color/HslToRgb";

describe("color/HslToRgb", () => {
  it("is a function", () => {
    expect(HslToRgb).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(HslToRgb(0, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HslToRgb(1, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HslToRgb(0, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HslToRgb(0, 0, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HslToRgb(1, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HslToRgb(1, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HslToRgb(0, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HslToRgb(0, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(HslToRgb(1, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
  });
});
