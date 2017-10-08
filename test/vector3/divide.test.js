import { expect } from "chai";
import { divide } from "../../src/vector3/divide";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: -1, y: -1, z: -1 };

describe("vector2/divide", () => {
  it("is a function", () => {
    expect(divide).is.a("function");
  });

  it("calculates correctly", () => {
    expect(divide(vector1, vector1)).to.deep.equal({
      x: NaN,
      y: NaN,
      z: NaN
    });
    expect(divide(vector2, vector1)).to.deep.equal({
      x: Infinity,
      y: Infinity,
      z: Infinity
    });
    expect(divide(vector2, vector2)).to.deep.equal(vector2);
    expect(divide(vector2, vector3)).to.deep.equal(vector3);
  });
});
