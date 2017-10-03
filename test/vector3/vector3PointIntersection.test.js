import { expect } from "chai";
import { vector3PointIntersection } from "../../src/vector3/vector3PointIntersection";

describe("vector3/sphericalCollision", () => {
  it("is a function", () => {
    expect(vector3PointIntersection).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(
      vector3PointIntersection({ x: 0, y: 0, z: 0 }, 1, { x: 0, y: 0, z: 0 }, 1)
    ).to.be.true;
    expect(
      vector3PointIntersection(
        { x: -1, y: -1, z: -1 },
        1,
        { x: 1, y: 1, z: 1 },
        1
      )
    ).to.be.false;
    expect(
      vector3PointIntersection(
        { x: -1, y: -1, z: -1 },
        2,
        { x: 1, y: 1, z: 1 },
        2
      )
    ).to.be.true;
    expect(
      vector3PointIntersection(
        { x: -10, y: 0, z: 0 },
        2,
        { x: 0, y: 0, z: 0 },
        2
      )
    ).to.be.false;
    expect(
      vector3PointIntersection(
        { x: 0, y: -10, z: 0 },
        2,
        { x: 0, y: 0, z: 0 },
        2
      )
    ).to.be.false;
    expect(
      vector3PointIntersection(
        { x: 0, y: 0, z: -10 },
        2,
        { x: 0, y: 0, z: 0 },
        2
      )
    ).to.be.false;
  });
});
