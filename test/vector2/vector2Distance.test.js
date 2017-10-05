import { expect } from "chai";
import { vector2Distance } from "../../src/vector2/vector2Distance";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 0 };
const vector3 = { x: -1, y: 0 };
const vector4 = { x: 0, y: 1 };
const vector5 = { x: 0, y: -1 };

describe("vector2/vector2Distance", () => {
  it("is a function", () => {
    expect(vector2Distance).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(vector2Distance(vector1, vector1)).to.equal(0);
    expect(vector2Distance(vector2, vector1)).to.equal(1);
    expect(vector2Distance(vector2, vector3)).to.equal(2);
    expect(vector2Distance(vector4, vector1)).to.equal(1);
    expect(vector2Distance(vector4, vector5)).to.equal(2);
  });
});
