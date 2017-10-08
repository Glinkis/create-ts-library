import { expect } from "chai";
import { radianToDegree } from "../../src/math/radianToDegree";

describe("math/radianToDegree", () => {
  it("calculates the correct values", () => {
    expect(radianToDegree(0)).to.equal(0);
    expect(radianToDegree(Math.PI)).to.equal(180);
    expect(radianToDegree(Math.PI * 2)).to.equal(360);
  });
});
