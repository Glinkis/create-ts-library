import { expect } from "chai";
import { rgbToHsl } from "../../src/color/rgbToHsl";

describe("color/rgbToHsl", () => {
  it("is a function", () => {
    expect(rgbToHsl).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(rgbToHsl(0, 0, 0)).to.deep.equals({ h: 0, s: 0, l: 0 });
    expect(rgbToHsl(255, 0, 0)).to.deep.equals({ h: 0, s: 1, l: 0.5 });
    expect(rgbToHsl(255, 255, 255)).to.deep.equals({ h: 0, s: 0, l: 1 });
  });
});
