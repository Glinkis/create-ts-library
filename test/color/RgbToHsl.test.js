import { describe, it } from "mocha";
import { expect } from "chai";
import { RgbToHsl } from "../../src/color/RgbToHsl";

describe("color/RgbToHsl", () => {
  it("is a function", () => {
    expect(RgbToHsl).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(RgbToHsl(0, 0, 0)).to.deep.equals({ h: 0, s: 0, l: 0 });
    expect(RgbToHsl(255, 0, 0)).to.deep.equals({ h: 0, s: 1, l: 0.5 });
    expect(RgbToHsl(255, 255, 255)).to.deep.equals({ h: 0, s: 0, l: 1 });
  });
});
