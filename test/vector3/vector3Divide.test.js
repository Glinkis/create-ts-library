import { expect } from "chai";
import { vector3Divide } from "../../src/vector3/vector3Divide";

describe("vector2/vector3Divide", () => {
  it("is a function", () => {
    expect(vector3Divide).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    expect(vector3Divide(vector1, vector2)).to.deep.equal({
      x: NaN,
      y: NaN,
      z: NaN
    });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 0, y: 0, z: 0 };
    expect(vector3Divide(vector1, vector2)).to.deep.equal({
      x: Infinity,
      y: Infinity,
      z: Infinity
    });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 1, y: 1, z: 1 };
    expect(vector3Divide(vector1, vector2)).to.deep.equal({ x: 1, y: 1, z: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: -1, y: -1, z: -1 };
    expect(vector3Divide(vector1, vector2)).to.deep.equal({
      x: -1,
      y: -1,
      z: -1
    });
  });
});
