import { expect } from "chai";
import { distanceBetween2DPoints } from "../../src/vector2/distanceBetween2dPoints";

describe("vector2/distanceBetween2DPoints", () => {
  it("is a function", () => {
    expect(distanceBetween2DPoints).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(distanceBetween2DPoints(0, 0, 0, 0)).to.equal(0);
    expect(distanceBetween2DPoints(1, 0, 0, 0)).to.equal(1);
    expect(distanceBetween2DPoints(1, 0, -1, 0)).to.equal(2);
    expect(distanceBetween2DPoints(0, 1, 0, 0)).to.equal(1);
    expect(distanceBetween2DPoints(0, 1, 0, -1)).to.equal(2);
  });
});
