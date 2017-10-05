import { expect } from "chai";
import { vector2Multiply as multiply } from "../../src/vector2/vector2Multiply";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/vector2Multiply", () => {
  it("is a function", () => {
    expect(multiply).is.a("function");
  });

  it("calculates correctly", () => {
    expect(multiply(vector1, vector1)).to.deep.equal(vector1);
    expect(multiply(vector2, vector1)).to.deep.equal(vector1);
    expect(multiply(vector2, vector2)).to.deep.equal(vector2);
    expect(multiply(vector2, vector3)).to.deep.equal(vector3);
  });
});
