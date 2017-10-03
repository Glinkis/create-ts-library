import { expect } from "chai";
import { vector2PointIntersection } from "../../src/vector2/vector2PointIntersection";

describe("vector2/circularCollision", () => {
  it("is a function", () => {
    expect(vector2PointIntersection).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(vector2PointIntersection({ x: 0, y: 0 }, 1, { x: 0, y: 0 }, 1)).to.be
      .true;
    expect(vector2PointIntersection({ x: 0, y: 0 }, 1, { x: 2, y: 0 }, 1)).to.be
      .true;
    expect(vector2PointIntersection({ x: -1, y: 0 }, 1, { x: 1, y: 0 }, 1)).to
      .be.true;
    expect(vector2PointIntersection({ x: -2, y: 0 }, 1, { x: 1, y: 0 }, 1)).to
      .be.false;
    expect(vector2PointIntersection({ x: -1, y: -1 }, 1, { x: 1, y: 1 }, 1)).to
      .be.false;
    expect(vector2PointIntersection({ x: -1, y: -1 }, 1, { x: 1, y: 1 }, 2)).to
      .be.true;
  });
});
