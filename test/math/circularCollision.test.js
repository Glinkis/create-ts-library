import * as chai from "chai";
import { circularCollision } from "../../src/math/circularCollision";

const { expect } = chai;

describe("math/circularCollision", () => {
  it("is a function", () => {
    expect(circularCollision).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(circularCollision(0, 0, 1, 0, 0, 1)).to.be.true;
    expect(circularCollision(0, 0, 1, 2, 0, 1)).to.be.true;
    expect(circularCollision(-1, 0, 1, 1, 0, 1)).to.be.true;
    expect(circularCollision(-2, 0, 1, 1, 0, 1)).to.be.false;
    expect(circularCollision(-1, -1, 1, 1, 1, 1)).to.be.false;
    expect(circularCollision(-1, -1, 1, 1, 1, 2)).to.be.true;
  });
});
