import { expect } from "chai";
import { vector2PointIntersection } from "../../src/vector2/vector2PointIntersection";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 2, y: 0 };
const vector3 = { x: -1, y: 0 };
const vector4 = { x: 1, y: 0 };
const vector5 = { x: -2, y: 0 };
const vector6 = { x: -1, y: -1 };
const vector7 = { x: 1, y: 1 };

describe("vector2/vector2PointIntersection", () => {
  it("is a function", () => {
    expect(vector2PointIntersection).to.be.a("function");
  });

  it("calculates collisions correctly", () => {
    expect(vector2PointIntersection(vector1, 1, vector1, 1)).to.be.true;
    expect(vector2PointIntersection(vector1, 1, vector2, 1)).to.be.true;
    expect(vector2PointIntersection(vector3, 1, vector4, 1)).to.be.true;
    expect(vector2PointIntersection(vector5, 1, vector4, 1)).to.be.false;
    expect(vector2PointIntersection(vector6, 1, vector7, 1)).to.be.false;
    expect(vector2PointIntersection(vector6, 1, vector7, 2)).to.be.true;
  });
});
