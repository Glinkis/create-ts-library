import { expect } from "chai";
import { vector3Scale } from "../../src/vector3/vector3Scale";

describe("vector2/vector3Multiply", () => {
  it("is a function", () => {
    expect(vector3Scale).is.a("function");
  });

  it("calculates correctly", () => {
    const vector = { x: 0, y: 0, z: 0 };
    const expected = { x: 0, y: 0, z: 0 };
    expect(vector3Scale(vector, 0)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 0, y: 0, z: 0 };
    const expected = { x: 0, y: 0, z: 0 };
    expect(vector3Scale(vector, 10)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1, z: 1 };
    const expected = { x: 0, y: 0, z: 0 };
    expect(vector3Scale(vector, 0)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1, z: 1 };
    const expected = { x: 1, y: 1, z: 1 };
    expect(vector3Scale(vector, 1)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1, z: 1 };
    const expected = { x: -1, y: -1, z: -1 };
    expect(vector3Scale(vector, -1)).to.deep.equal(expected);
  });
});
