import { expect } from "chai";
import { pointIntersection } from "../../src/vector3/pointIntersection";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: -1, y: -1, z: -1 };
const vector4 = { x: -10, y: 0, z: 0 };
const vector5 = { x: 0, y: -10, z: 0 };
const vector6 = { x: 0, y: 0, z: -10 };
const size1 = 1;
const size2 = 2;

describe("vector3/pointIntersection", () => {
  it("is a function", () => {
    expect(pointIntersection).to.be.a("function");
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector1, size1, vector1, size1);
    expect(result).to.be.true;
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector3, size1, vector2, size1);
    expect(result).to.be.false;
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector3, size2, vector2, size2);
    expect(result).to.be.true;
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector4, size2, vector1, size2);
    expect(result).to.be.false;
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector5, size2, vector1, size2);
    expect(result).to.be.false;
  });

  it("produces the correct result", () => {
    const result = pointIntersection(vector6, size2, vector1, size2);
    expect(result).to.be.false;
  });
});
