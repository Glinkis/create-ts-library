import { describe, it } from "mocha";
import { expect } from "chai";
import { vector2Scale } from "../../src/vector2/vector2Scale";

describe("vector2/vector2Scale", () => {
  it("is a function", () => {
    expect(vector2Scale).is.a("function");
  });

  it("calculates correctly", () => {
    const vector = { x: 0, y: 0 };
    const expected = { x: 0, y: 0 };
    expect(vector2Scale(vector, 0)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 0, y: 0 };
    const expected = { x: 0, y: 0 };
    expect(vector2Scale(vector, 10)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1 };
    const expected = { x: 0, y: 0 };
    expect(vector2Scale(vector, 0)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1 };
    const expected = { x: 1, y: 1 };
    expect(vector2Scale(vector, 1)).to.deep.equal(expected);
  });

  it("calculates correctly", () => {
    const vector = { x: 1, y: 1 };
    const expected = { x: -1, y: -1 };
    expect(vector2Scale(vector, -1)).to.deep.equal(expected);
  });
});
