import * as chai from "chai";
import { sphericalCollision } from "../../src/math/sphericalCollision";

const { expect } = chai;

describe("math/sphericalCollision", () => {
  it("is a function", () => {
    expect(sphericalCollision).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(sphericalCollision({ x: 0, y: 0, z: 0 }, 1, { x: 0, y: 0, z: 0 }, 1))
      .to.be.true;
    expect(
      sphericalCollision({ x: -1, y: -1, z: -1 }, 1, { x: 1, y: 1, z: 1 }, 1)
    ).to.be.false;
    expect(
      sphericalCollision({ x: -1, y: -1, z: -1 }, 2, { x: 1, y: 1, z: 1 }, 2)
    ).to.be.true;
    expect(
      sphericalCollision({ x: -10, y: 0, z: 0 }, 2, { x: 0, y: 0, z: 0 }, 2)
    ).to.be.false;
    expect(
      sphericalCollision({ x: 0, y: -10, z: 0 }, 2, { x: 0, y: 0, z: 0 }, 2)
    ).to.be.false;
    expect(
      sphericalCollision({ x: 0, y: 0, z: -10 }, 2, { x: 0, y: 0, z: 0 }, 2)
    ).to.be.false;
  });
});
