import { describe, it } from "mocha";
import { expect } from "chai";
import { HexToRgba } from "../../src/color/HexToRgba";

describe("color/HEXtoRGB", () => {
  it("is a function", () => {
    expect(HexToRgba).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(HexToRgba("#000000")).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HexToRgba("#909090")).to.deep.equals({ r: 144, g: 144, b: 144 });
    expect(HexToRgba("#FFFFFF")).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HexToRgba("#0000FF")).to.deep.equals({ r: 0, g: 0, b: 255 });
    expect(HexToRgba("00FF00")).to.deep.equals({ r: 0, g: 255, b: 0 });
    expect(HexToRgba("FF0000")).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(HexToRgba("#00000000")).to.deep.equals({ r: 0, g: 0, b: 0, a: 0 });
    expect(HexToRgba("#90909090")).to.deep.equals({
      r: 144,
      g: 144,
      b: 144,
      a: 144
    });
    expect(HexToRgba("#000000FF")).to.deep.equals({ r: 0, g: 0, b: 0, a: 255 });
    expect(HexToRgba("#0000FF00")).to.deep.equals({ r: 0, g: 0, b: 255, a: 0 });
    expect(HexToRgba("00FF0000")).to.deep.equals({ r: 0, g: 255, b: 0, a: 0 });
    expect(HexToRgba("FF000000")).to.deep.equals({ r: 255, g: 0, b: 0, a: 0 });
  });
});
