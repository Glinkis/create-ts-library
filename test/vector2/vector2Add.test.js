import { expect } from "chai";
import { vector2Add as add } from "../../src/vector2/vector2Add";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };
const vector4 = { x: 2, y: 2 };

describe("vector2/vector2Distance", () => {
  it("is a function", () => {
    expect(add).is.a("function");
  });

  it("calculates correctly", () => {
    expect(add(vector1, vector1)).to.deep.equal(vector1);
    expect(add(vector2, vector1)).to.deep.equal(vector2);
    expect(add(vector2, vector2)).to.deep.equal(vector4);
    expect(add(vector2, vector3)).to.deep.equal(vector1);
  });
});
