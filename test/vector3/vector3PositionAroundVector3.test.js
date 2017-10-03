import { expect } from "chai";
import { vector3PositionAroundVector3 } from "../../src/vector3/vector3PositionAroundVector3";

describe("vector3/vector3PositionAroundVector3", () => {
  it("is a function", () => {
    expect(vector3PositionAroundVector3).is.a("function");
  });

  it("sets the correct positions", () => {
    const point = vector3PositionAroundVector3({ x: 0, y: 0, z: 0 }, 1, 0, 0);
    expect(point.x).to.equal(1);
    expect(point.y).to.equal(0);
    expect(point.z).to.equal(0);
  });

  // TODO: More extensive tests.
});
