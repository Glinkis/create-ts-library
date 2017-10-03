import { expect } from "chai";
import { vector3Distance } from "../../src/vector3/vector3Distance";

describe("vector3/vector3Distance", () => {
  it("is a function", () => {
    expect(vector3Distance).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(
      vector3Distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(0);
    expect(
      vector3Distance({ x: 1, y: 0, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(1);
    expect(
      vector3Distance({ x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 })
    ).to.equal(2);
    expect(
      vector3Distance({ x: 0, y: 1, z: 0 }, { x: 0, y: 0, z: 0 })
    ).to.equal(1);
    expect(
      vector3Distance({ x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 })
    ).to.equal(2);
  });
});
