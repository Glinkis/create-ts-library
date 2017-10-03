import { expect } from "chai";
import { vector2PointIntersection } from "../../src/vector2/vector2PointIntersection";

describe("vector2/circularCollision", () => {
  it("is a function", () => {
    expect(vector2PointIntersection).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2PointIntersection(vector1, 1, vector2, 1)).to.be.true;

    const vector3 = { x: 0, y: 0 };
    const vector4 = { x: 2, y: 0 };
    expect(vector2PointIntersection(vector3, 1, vector4, 1)).to.be.true;

    const vector5 = { x: -1, y: 0 };
    const vector6 = { x: 1, y: 0 };
    expect(vector2PointIntersection(vector5, 1, vector6, 1)).to.be.true;

    const vector7 = { x: -2, y: 0 };
    const vector8 = { x: 1, y: 0 };
    expect(vector2PointIntersection(vector7, 1, vector8, 1)).to.be.false;

    const vector9 = { x: -1, y: -1 };
    const vector10 = { x: 1, y: 1 };
    expect(vector2PointIntersection(vector9, 1, vector10, 1)).to.be.false;

    const vector11 = { x: -1, y: -1 };
    const vector12 = { x: 1, y: 1 };
    expect(vector2PointIntersection(vector11, 1, vector12, 2)).to.be.true;
  });
});
