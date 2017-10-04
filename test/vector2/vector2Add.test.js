import { expect } from "chai";
import { vector2Add } from "../../src/vector2/vector2Add";

describe("vector2/vector2Distance", () => {
  it("is a function", () => {
    expect(vector2Add).is.a("function");
  });

  it("calculates correctly", () => {
    const vector1 = { x: 0, y: 0 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Add(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 0, y: 0 };
    expect(vector2Add(vector1, vector2)).to.deep.equal({ x: 1, y: 1 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: 1, y: 1 };
    expect(vector2Add(vector1, vector2)).to.deep.equal({ x: 2, y: 2 });
  });

  it("calculates correctly", () => {
    const vector1 = { x: 1, y: 1 };
    const vector2 = { x: -1, y: -1 };
    expect(vector2Add(vector1, vector2)).to.deep.equal({ x: 0, y: 0 });
  });
});
