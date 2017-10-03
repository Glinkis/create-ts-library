import { expect } from "chai";
import { vector2Negate } from "../../src/vector2/vector2Negate";

describe("vector2/vector2Multiply", () => {
  it("is a function", () => {
    expect(vector2Negate).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0 };
    expect(vector2Negate(vector1)).to.deep.equal({ x: 0, y: 0 });

    const vector2 = { x: 1, y: -1 };
    expect(vector2Negate(vector2)).to.deep.equal({ x: -1, y: 1 });

    const vector3 = { x: -1, y: 1 };
    expect(vector2Negate(vector3)).to.deep.equal({ x: 1, y: -1 });
  });
});
