import { expect } from "chai";
import * as mocha from "mocha";
import { clamp } from "../../src/math/clamp";

describe("math/clamp", () => {
  it("calculates the correct values", () => {
    expect(clamp(0, 0, 0)).to.equal(0);
    expect(clamp(0, 1, 2)).to.equal(1);
    expect(clamp(1, 1, 2)).to.equal(1);
    expect(clamp(2, 1, 2)).to.equal(2);
    expect(clamp(3, 1, 2)).to.equal(2);
  });
});
