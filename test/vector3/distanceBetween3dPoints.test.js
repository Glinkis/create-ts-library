import { expect } from "chai";
import { distanceBetween3DPoints } from "../../src/vector3/distanceBetween3dPoints";

describe("vector3/distanceBetween3DPoints", () => {
  it("is a function", () => {
    expect(distanceBetween3DPoints).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(distanceBetween3DPoints(0, 0, 0, 0, 0, 0)).to.equal(0);
    expect(distanceBetween3DPoints(1, 0, 0, 0, 0, 0)).to.equal(1);
    expect(distanceBetween3DPoints(1, 0, 0, -1, 0, 0)).to.equal(2);
    expect(distanceBetween3DPoints(0, 1, 0, 0, 0, 0)).to.equal(1);
    expect(distanceBetween3DPoints(0, 1, 0, 0, -1, 0)).to.equal(2);
  });
});
