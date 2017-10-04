import { expect } from "chai";
import { vector3Add } from "../../src/vector3/vector3Add";

describe("vector2/vector2Distance", () => {
  it("is a function", () => {
    expect(vector3Add).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    const vector2 = { x: 0, y: 0, z: 0 };
    expect(vector3Add(vector1, vector2)).to.deep.equal({ x: 0, y: 0, z: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 0, y: 0, z: 0 };
    expect(vector3Add(vector1, vector2)).to.deep.equal({ x: 1, y: 1, z: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: 1, y: 1, z: 1 };
    expect(vector3Add(vector1, vector2)).to.deep.equal({ x: 2, y: 2, z: 2 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1, z: 1 };
    const vector2 = { x: -1, y: -1, z: -1 };
    expect(vector3Add(vector1, vector2)).to.deep.equal({ x: 0, y: 0, z: 0 });
  });
});
