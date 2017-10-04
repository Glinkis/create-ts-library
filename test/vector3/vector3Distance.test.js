import { describe, it } from "mocha";
import { expect } from "chai";
import { vector3Distance } from "../../src/vector3/vector3Distance";

describe("vector3/vector3Distance", () => {
  it("is a function", () => {
    expect(vector3Distance).is.a("function");
  });

  it("calculates the correct distance", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    expect(vector3Distance(vector1, vector2)).to.equal(0);

    const vector3 = { x: 1, y: 0, z: 0 };
    const vector4 = { x: 0, y: 0, z: 0 };
    expect(vector3Distance(vector3, vector4)).to.equal(1);

    const vector5 = { x: 1, y: 0, z: 0 };
    const vector6 = { x: -1, y: 0, z: 0 };
    expect(vector3Distance(vector5, vector6)).to.equal(2);

    const vector7 = { x: 0, y: 1, z: 0 };
    const vector8 = { x: 0, y: 0, z: 0 };
    expect(vector3Distance(vector7, vector8)).to.equal(1);

    const vector9 = { x: 0, y: 1, z: 0 };
    const vector10 = { x: 0, y: -1, z: 0 };
    expect(vector3Distance(vector9, vector10)).to.equal(2);
  });
});
