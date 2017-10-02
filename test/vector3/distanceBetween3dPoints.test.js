import { expect } from "chai";
import { distanceBetween3DPoints } from "../../src/vector3/distanceBetween3dPoints";

describe("vector3/distanceBetween3DPoints", () => {
  it("is a function", () => {
    expect(distanceBetween3DPoints).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(
      distanceBetween3DPoints({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(0);
    expect(
      distanceBetween3DPoints({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(1);
    expect(
      distanceBetween3DPoints({ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 })
    ).to.equal(2);
    expect(
      distanceBetween3DPoints({ x: 0, y: 1, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(1);
    expect(
      distanceBetween3DPoints({ x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 })
    ).to.equal(2);
  });
});
