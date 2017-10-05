import { expect } from "chai";
import { vector3Distance as distance } from "../../src/vector3/vector3Distance";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 0, z: 0 };
const vector3 = { x: -1, y: 0, z: 0 };
const vector4 = { x: 0, y: 1, z: 0 };
const vector5 = { x: 0, y: -1, z: 0 };

describe("vector3/vector3Distance", () => {
  it("is a function", () => {
    expect(distance).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(distance(vector1, vector1)).to.equal(0);
    expect(distance(vector2, vector1)).to.equal(1);
    expect(distance(vector2, vector3)).to.equal(2);
    expect(distance(vector4, vector1)).to.equal(1);
    expect(distance(vector4, vector5)).to.equal(2);
  });
});
