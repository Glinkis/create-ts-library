import { describe, it } from "mocha";
import { expect } from "chai";
import { vector3Negate } from "../../src/vector3/vector3Negate";

describe("vector3/vector3Negate", () => {
  it("is a function", () => {
    expect(vector3Negate).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0, z: 0 };
    expect(vector3Negate(vector1)).to.deep.equal({ x: 0, y: 0, z: 0 });

    const vector2 = { x: 1, y: -1, z: 1 };
    expect(vector3Negate(vector2)).to.deep.equal({ x: -1, y: 1, z: -1 });

    const vector3 = { x: -1, y: 1, z: -1 };
    expect(vector3Negate(vector3)).to.deep.equal({ x: 1, y: -1, z: 1 });
  });
});
