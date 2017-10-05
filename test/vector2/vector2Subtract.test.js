import { expect } from "chai";
import { vector2Subtract } from "../../src/vector2/vector2Subtract";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/vector2Subtract", () => {
  it("is a function", () => {
    expect(vector2Subtract).is.a("function");
  });

  it("calculates correctly", () => {
    expect(vector2Subtract(vector1, vector1)).to.deep.equal({ x: 0, y: 0 });
    expect(vector2Subtract(vector2, vector1)).to.deep.equal({ x: 1, y: 1 });
    expect(vector2Subtract(vector2, vector2)).to.deep.equal({ x: 0, y: 0 });
    expect(vector2Subtract(vector2, vector3)).to.deep.equal({ x: 2, y: 2 });
  });
});
