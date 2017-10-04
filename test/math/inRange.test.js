import { describe, it } from "mocha";
import { expect } from "chai";
import { inRange } from "../../src/math/inRange";

describe("math/inRange", () => {
  it("returns false if out of range", () => {
    expect(inRange(11, 0, 10, 0)).to.equal(false);
    expect(inRange(9, 10, 100, 0)).to.equal(false);
  });

  it("returns true of inside range", () => {
    expect(inRange(0, 0, 10, 0)).to.equal(true);
    expect(inRange(10, 0, 10, 0)).to.equal(true);
  });

  it("returns true when within threshold", () => {
    expect(inRange(8, 0, 10, 2)).to.equal(true);
    expect(inRange(12, 0, 10, 2)).to.equal(true);
  });
});
