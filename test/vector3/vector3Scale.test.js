import { expect } from "chai";
import { vector3Scale as scale } from "../../src/vector3/vector3Scale";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: -1, y: -1, z: -1 };

describe("vector2/vector3Multiply", () => {
  it("is a function", () => {
    expect(scale).is.a("function");
  });

  it("calculates correctly", () => {
    expect(scale(vector1, 0)).to.deep.equal(vector1);
    expect(scale(vector1, 10)).to.deep.equal(vector1);
    expect(scale(vector2, 0)).to.deep.equal(vector1);
    expect(scale(vector2, 1)).to.deep.equal(vector2);
    expect(scale(vector2, -1)).to.deep.equal(vector3);
  });
});
