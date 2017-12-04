import { expect } from "chai";
import * as mocha from "mocha";
import { hslToRgb } from "../../src/color/hslToRgb";

describe("color/hslToRgb", () => {
  it("converts the colors correctly", () => {
    expect(hslToRgb(0, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(1, 0, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(0, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(0, 0, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(1, 1, 0)).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(hslToRgb(1, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(0, 1, 1)).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(hslToRgb(0, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(hslToRgb(1, 1, 0.5)).to.deep.equals({ r: 255, g: 0, b: 0 });
  });
});
