import { expect } from "chai";
import { vector2Divide } from "../../src/vector2/vector2Divide";

describe("vector2/vector2Divide", () => {
  it("is a function", () => {
    expect(vector2Divide).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Divide(vector1, vector2)).to.deep.equal({ x: NaN, y: NaN });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Divide(vector1, vector2)).to.deep.equal({
      x: Infinity,
      y: Infinity
    });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 1, y: 1 };
    expect(vector2Divide(vector1, vector2)).to.deep.equal({ x: 1, y: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: -1, y: -1 };
    expect(vector2Divide(vector1, vector2)).to.deep.equal({ x: -1, y: -1 });
  });
});
