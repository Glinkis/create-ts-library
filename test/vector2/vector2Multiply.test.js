import { expect } from "chai";
import { vector2Multiply } from "../../src/vector2/vector2Multiply";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/vector2Multiply", () => {
  it("is a function", () => {
    expect(vector2Multiply).is.a("function");
  });

  it("calculates correctly", () => {
    expect(vector2Multiply(vector1, vector1)).to.deep.equal({ x: 0, y: 0 });
    expect(vector2Multiply(vector2, vector1)).to.deep.equal({ x: 0, y: 0 });
    expect(vector2Multiply(vector2, vector2)).to.deep.equal({ x: 1, y: 1 });
    expect(vector2Multiply(vector2, vector3)).to.deep.equal({ x: -1, y: -1 });
  });
});
