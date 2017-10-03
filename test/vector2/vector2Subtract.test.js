import { expect } from "chai";
import { vector2Subtract } from "../../src/vector2/vector2Subtract";

describe("vector2/vector2Subtract", () => {
  it("is a function", () => {
    expect(vector2Subtract).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Subtract(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Subtract(vector1, vector2)).to.deep.equal({ x: 1, y: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 1, y: 1 };
    expect(vector2Subtract(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: -1, y: -1 };
    expect(vector2Subtract(vector1, vector2)).to.deep.equal({ x: 2, y: 2 });
  });
});
