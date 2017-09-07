import { expect } from "chai";
import { RGBAtoHEX } from "../../src/math/RGBAtoHEX";

describe("math/RGBAtoHEX", () => {
  it("is a function", () => {
    expect(RGBAtoHEX).to.be.a("function");
  });

  it("converts the colors correctly", () => {
    expect(RGBAtoHEX(0, 0, 0)).to.equal("#000000");
    expect(RGBAtoHEX(0, 0, 255)).to.equal("#0000ff");
    expect(RGBAtoHEX(0, 255, 0)).to.equal("#00ff00");
    expect(RGBAtoHEX(255, 0, 0)).to.equal("#ff0000");
    expect(RGBAtoHEX(255, 255, 255)).to.equal("#ffffff");
    expect(RGBAtoHEX(0, 0, 0, 0)).to.equal("#00000000");
    expect(RGBAtoHEX(255, 255, 255, 255)).to.equal("#ffffffff");
    expect(RGBAtoHEX(255, 0, 255, 255)).to.equal("#ff00ffff");
  });
});
