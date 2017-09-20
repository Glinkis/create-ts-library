import { expect } from "chai";
import { HSLtoRGB } from "../../src/math/HslToRgb";

describe("math/HSLtoRGB", () => {
  it("is a function", () => {
    expect(HSLtoRGB).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(HSLtoRGB(0, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HSLtoRGB(1, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HSLtoRGB(0, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HSLtoRGB(0, 0, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HSLtoRGB(1, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HSLtoRGB(1, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HSLtoRGB(0, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HSLtoRGB(0, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(HSLtoRGB(1, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
  });
});
