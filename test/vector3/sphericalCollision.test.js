import { expect } from "chai";
import { sphericalCollision } from "../../src/vector3/sphericalCollision";

describe("vector3/sphericalCollision", () => {
  it("is a function", () => {
    expect(sphericalCollision).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(sphericalCollision(0, 0, 0, 1, 0, 0, 0, 1)).to.be.true;
    expect(sphericalCollision(-1, -1, -1, 1, 1, 1, 1, 1)).to.be.false;
    expect(sphericalCollision(-1, -1, -1, 2, 1, 1, 1, 2)).to.be.true;
    expect(sphericalCollision(-10, 0, 0, 2, 0, 0, 0, 2)).to.be.false;
    expect(sphericalCollision(0, -10, 0, 2, 0, 0, 0, 2)).to.be.false;
    expect(sphericalCollision(0, 0, -10, 2, 0, 0, 0, 2)).to.be.false;
  });
});
