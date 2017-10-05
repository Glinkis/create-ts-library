import { expect } from "chai";
import { vector3Dot as dot } from "../../src/vector3/vector3Dot";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 0 };
const vector3 = { x: -1, y: -1, z: -1 };

describe("vector3/vector3Dot", () => {
  it("is a function", () => {
    expect(dot).is.a("function");
  });

  it("calculates correctly", () => {
    expect(dot(vector1, vector1)).to.deep.equal(0);
    expect(dot(vector1, vector2)).to.deep.equal(0);
    expect(dot(vector2, vector3)).to.deep.equal(-2);
    expect(dot(vector3, vector2)).to.deep.equal(-2);
  });
});
