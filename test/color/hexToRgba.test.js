import { expect } from "chai";
import { hexToRgba } from "../../src/color/hexToRgba";

describe("color/hexToRgba", () => {
  it("is a function", () => {
    expect(hexToRgba).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(hexToRgba("#000000")).to.deep.equals({ r: 0, g: 0, b: 0 });
    expect(hexToRgba("#909090")).to.deep.equals({ r: 144, g: 144, b: 144 });
    expect(hexToRgba("#FFFFFF")).to.deep.equals({ r: 255, g: 255, b: 255 });
    expect(hexToRgba("#0000FF")).to.deep.equals({ r: 0, g: 0, b: 255 });
    expect(hexToRgba("00FF00")).to.deep.equals({ r: 0, g: 255, b: 0 });
    expect(hexToRgba("FF0000")).to.deep.equals({ r: 255, g: 0, b: 0 });
    expect(hexToRgba("#00000000")).to.deep.equals({ r: 0, g: 0, b: 0, a: 0 });
    expect(hexToRgba("#90909090")).to.deep.equals({
      r: 144,
      g: 144,
      b: 144,
      a: 144
    });
    expect(hexToRgba("#000000FF")).to.deep.equals({ r: 0, g: 0, b: 0, a: 255 });
    expect(hexToRgba("#0000FF00")).to.deep.equals({ r: 0, g: 0, b: 255, a: 0 });
    expect(hexToRgba("00FF0000")).to.deep.equals({ r: 0, g: 255, b: 0, a: 0 });
    expect(hexToRgba("FF000000")).to.deep.equals({ r: 255, g: 0, b: 0, a: 0 });
  });
});
