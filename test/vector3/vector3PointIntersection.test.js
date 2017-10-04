import { describe, it } from "mocha";
import { expect } from "chai";
import { vector3PointIntersection } from "../../src/vector3/vector3PointIntersection";

describe("vector3/vector3PointIntersection", () => {
  it("is a function", () => {
    expect(vector3PointIntersection).to.be.a("function");
  });

  it("produces correct result 1", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const size1 = 1;
    const size2 = 1;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.true;
  });

  it("produces correct result 2", () => {
    const vector1 = { x: -1, y: -1, z: -1 };
    const vector2 = { x: 1, y: 1, z: 1 };
    const size1 = 1;
    const size2 = 1;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.false;
  });

  it("produces correct result 3", () => {
    const vector1 = { x: -1, y: -1, z: -1 };
    const vector2 = { x: 1, y: 1, z: 1 };
    const size1 = 2;
    const size2 = 2;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.true;
  });

  it("produces correct result 4", () => {
    const vector1 = { x: -10, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const size1 = 2;
    const size2 = 2;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.false;
  });

  it("produces correct result 5", () => {
    const vector1 = { x: 0, y: -10, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const size1 = 2;
    const size2 = 2;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.false;
  });

  it("produces correct result 6", () => {
    const vector1 = { x: 0, y: 0, z: -10 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const size1 = 2;
    const size2 = 2;
    const result = vector3PointIntersection(vector1, size1, vector2, size2);
    expect(result).to.be.false;
  });
});
