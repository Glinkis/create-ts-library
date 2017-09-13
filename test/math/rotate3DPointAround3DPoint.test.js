import { expect } from "chai";
import { rotate3DPointAround3DPoint } from "../../src/math/rotate3DPointAround3DPoint";

describe("math/rotate3DPointAround3DPoint", () => {
  it("is a function", () => {
    expect(rotate3DPointAround3DPoint).is.a("function");
  });

  it("sets the correct positions", () => {
    const point = rotate3DPointAround3DPoint(0, 0, 0, 1, 0, 0);
    expect(point.x).to.equal(1);
    expect(point.y).to.equal(0);
    expect(point.z).to.equal(0);
  });

  // TODO: More extensive tests.
});
