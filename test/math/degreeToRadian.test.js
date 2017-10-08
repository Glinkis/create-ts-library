import { expect } from "chai";
import { degreeToRadian } from "../../src/math/degreeToRadian";

describe("math/degreeToRadian", () => {
  it("calculates the correct values", () => {
    expect(degreeToRadian(0)).to.equal(0);
    expect(degreeToRadian(180)).to.equal(Math.PI);
    expect(degreeToRadian(360)).to.equal(Math.PI * 2);
  });
});
