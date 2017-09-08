import { expect } from "chai";
import { HEXtoRGBA } from "../../src/math/HEXtoRGBA";

describe("math/HEXtoRGB", () => {
  it("is a function", () => {
    expect(HEXtoRGBA).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(HEXtoRGBA("#000000")).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(HEXtoRGBA("#909090")).to.deep.equals({ r: 144, g: 144, b: 144 });
    expect(HEXtoRGBA("#FFFFFF")).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(HEXtoRGBA("#0000FF")).to.deep.equals({ r: 0, g: 0, b: 255 });
    expect(HEXtoRGBA("00FF00")).to.deep.equals({ r: 0, g: 255, b: 0 });
    expect(HEXtoRGBA("FF0000")).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(HEXtoRGBA("#00000000")).to.deep.equals({ r: 0, g: 0, b: 0, a: 0 });
    expect(HEXtoRGBA("#90909090")).to.deep.equals({
      r: 144,
      g: 144,
      b: 144,
      a: 144
    });
    expect(HEXtoRGBA("#000000FF")).to.deep.equals({ r: 0, g: 0, b: 0, a: 255 });
    expect(HEXtoRGBA("#0000FF00")).to.deep.equals({ r: 0, g: 0, b: 255, a: 0 });
    expect(HEXtoRGBA("00FF0000")).to.deep.equals({ r: 0, g: 255, b: 0, a: 0 });
    expect(HEXtoRGBA("FF000000")).to.deep.equals({ r: 255, g: 0, b: 0, a: 0 });
  });
});
