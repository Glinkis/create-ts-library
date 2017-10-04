import { describe, it } from "mocha";
import { expect } from "chai";
import { vector2Multiply } from "../../src/vector2/vector2Multiply";

describe("vector2/vector2Multiply", () => {
  it("is a function", () => {
    expect(vector2Multiply).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Multiply(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Multiply(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 1, y: 1 };
    expect(vector2Multiply(vector1, vector2)).to.deep.equal({ x: 1, y: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: -1, y: -1 };
    expect(vector2Multiply(vector1, vector2)).to.deep.equal({ x: -1, y: -1 });
  });
});
