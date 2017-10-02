import { expect } from "chai";
import { getPositionAround3dPoint } from "../../src/vector3/getPositionAround3dPoint";

describe("vector3/getPositionAround3dPoint", () => {
  it("is a function", () => {
    expect(getPositionAround3dPoint).is.a("function");
  });

  it("sets the correct positions", () => {
    const point = getPositionAround3dPoint({ x: 0, y: 0, z: 0 }, 1, 0, 0);
    expect(point.x).to.equal(1);
    expect(point.y).to.equal(0);
    expect(point.z).to.equal(0);
  });

  // TODO: More extensive tests.
});
