import { expect } from "chai";
import { vector3Multiply } from "../../src/vector3/vector3Multiply";

describe("vector2/vector3Multiply", () => {
  it("is a function", () => {
    expect(vector3Multiply).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const expected = { x: 0, y: 0, z: 0 };
    expect(vector3Multiply(vector1, vector2)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 0, y: 0, z: 0 };
    const expected = { x: 0, y: 0, z: 0 };
    expect(vector3Multiply(vector1, vector2)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 1, y: 1, z: 1 };
    const expected = { x: 1, y: 1, z: 1 };
    expect(vector3Multiply(vector1, vector2)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: -1, y: -1, z: -1 };
    const expected = { x: -1, y: -1, z: -1 };
    expect(vector3Multiply(vector1, vector2)).to.deep.equal(expected);
  });
});
