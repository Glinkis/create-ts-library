import * as chai from "chai";
import { circularCollision } from "../../src/logic/circularCollision";

const { expect } = chai;

describe("logic/circularCollision", () => {
  it("is a function", () => {
    expect(circularCollision).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(circularCollision({ x: 0, y: 0 }, 1, { x: 0, y: 0 }, 1)).to.be.true;
    expect(circularCollision({ x: 0, y: 0 }, 1, { x: 2, y: 0 }, 1)).to.be.true;
    expect(circularCollision({ x: -1, y: 0 }, 1, { x: 1, y: 0 }, 1)).to.be.true;
    expect(circularCollision({ x: -2, y: 0 }, 1, { x: 1, y: 0 }, 1)).to.be.false;
    expect(circularCollision({ x: -1, y: -1 }, 1, { x: 1, y: 1 }, 1)).to.be.false;
    expect(circularCollision({ x: -1, y: -1 }, 1, { x: 1, y: 1 }, 2)).to.be.true;
});
});
