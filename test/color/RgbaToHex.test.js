import { describe, it } from "mocha";
import { expect } from "chai";
import { RgbaToHex } from "../../src/color/RgbaToHex";

describe("color/RgbaToHex", () => {
  it("is a function", () => {
    expect(RgbaToHex).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(RgbaToHex(0, 0, 0)).to.equal("#000000");
    expect(RgbaToHex(0, 0, 255)).to.equal("#0000ff");
    expect(RgbaToHex(0, 255, 0)).to.equal("#00ff00");
    expect(RgbaToHex(255, 0, 0)).to.equal("#ff0000");
    expect(RgbaToHex(255, 255, 255)).to.equal("#ffffff");
    expect(RgbaToHex(0, 0, 0, 0)).to.equal("#00000000");
    expect(RgbaToHex(255, 255, 255, 255)).to.equal("#ffffffff");
    expect(RgbaToHex(255, 0, 255, 255)).to.equal("#ff00ffff");
  });
});
