import { expect } from "chai";
import { distanceBetween2DPoints } from "../../src/vector2/distanceBetween2dPoints";

describe("vector2/distanceBetween2DPoints", () => {
  it("is a function", () => {
    expect(distanceBetween2DPoints).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(distanceBetween2DPoints({ x: 0, y: 0 }, { x: 0, y: 0 })).to.equal(0);
    expect(distanceBetween2DPoints({ x: 1, y: 0 }, { x: 0, y: 0 })).to.equal(1);
    expect(distanceBetween2DPoints({ x: 1, y: 0 }, { x: -1, y: 0 })).to.equal(
      2
    );
    expect(distanceBetween2DPoints({ x: 0, y: 1 }, { x: 0, y: 0 })).to.equal(1);
    expect(distanceBetween2DPoints({ x: 0, y: 1 }, { x: 0, y: -1 })).to.equal(
      2
    );
  });
});
