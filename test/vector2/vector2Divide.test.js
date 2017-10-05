import { expect } from "chai";
import { vector2Divide } from "../../src/vector2/vector2Divide";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/vector2Divide", () => {
  it("is a function", () => {
    expect(vector2Divide).is.a("function");
  });

  it("calculates correctly", () => {
    expect(vector2Divide(vector1, vector1)).to.deep.equal({ x: NaN, y: NaN });
    expect(vector2Divide(vector2, vector1)).to.deep.equal({
      x: Infinity,
      y: Infinity
    });
    expect(vector2Divide(vector2, vector2)).to.deep.equal({ x: 1, y: 1 });
    expect(vector2Divide(vector2, vector3)).to.deep.equal({ x: -1, y: -1 });
  });
});
