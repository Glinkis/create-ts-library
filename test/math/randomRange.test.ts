import { expect } from "chai";
import * as mocha from "mocha";
import { randomRange } from "../../src/math/randomRange";

describe("math/randomRange", () => {
  it("calculates the correct values", () => {
    for (let i = 0; i < 100; i += 1) {
      expect(randomRange(0, 0)).to.equal(0);
      expect(randomRange(0, 1))
        .to.be.above(0)
        .and.below(1);
      expect(randomRange(0, 10))
        .to.be.above(0)
        .and.below(10);
      expect(randomRange(0, 1000))
        .to.be.above(0)
        .and.below(1000);
      expect(randomRange(1, 10))
        .to.be.above(1)
        .and.below(10);
      expect(randomRange(10, 0))
        .to.be.above(0)
        .and.below(10); // <-- inverted test
    }
  });
});
