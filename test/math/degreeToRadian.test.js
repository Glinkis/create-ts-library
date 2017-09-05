import * as chai from "chai";
import { degreeToRadian } from "../../src/math/degreeToRadian";

const { expect } = chai;

describe("math/degreeToRadian", () => {
  it("is a function", () => {
    expect(degreeToRadian).is.a("function");
  });

  it("calculates the correct values", () => {
    expect(degreeToRadian(0)).to.equal(0);
    expect(degreeToRadian(180)).to.equal(Math.PI);
    expect(degreeToRadian(360)).to.equal(Math.PI * 2);
  });
});
