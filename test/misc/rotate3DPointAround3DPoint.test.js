import * as chai from "chai";
import { rotate3DPointAround3DPoint } from "../../src/misc/rotate3DPointAround3DPoint";

const { expect } = chai;

const pointA = { x: 0, y: 0, z: 0 };
const pointB = { x: 0, y: 0, z: 0 };

describe("misc/rotate3DPointAround3DPoint", () => {
  it("is a function", () => {
    expect(rotate3DPointAround3DPoint).is.a("function");
  });

  it("sets the correct positions", () => {
    rotate3DPointAround3DPoint(pointA, pointB, 1, 0, 0);
    expect(pointA.x).to.equal(1);
    expect(pointA.y).to.equal(0);
    expect(pointA.z).to.equal(0);
  });

  // TODO: More extensive tests.
});
