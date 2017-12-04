import { expect } from "chai";
import * as mocha from "mocha";
import { rgbaToHex } from "../../src/color/rgbaToHex";

describe("color/rgbaToHex", () => {
  it("converts the colors correctly", () => {
    expect(rgbaToHex(0, 0, 0)).to.equal("#000000");
    expect(rgbaToHex(0, 0, 255)).to.equal("#0000ff");
    expect(rgbaToHex(0, 255, 0)).to.equal("#00ff00");
    expect(rgbaToHex(255, 0, 0)).to.equal("#ff0000");
    expect(rgbaToHex(255, 255, 255)).to.equal("#ffffff");
    expect(rgbaToHex(0, 0, 0, 0)).to.equal("#00000000");
    expect(rgbaToHex(255, 255, 255, 255)).to.equal("#ffffffff");
    expect(rgbaToHex(255, 0, 255, 255)).to.equal("#ff00ffff");
  });
});
