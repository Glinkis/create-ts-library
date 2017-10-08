import { expect } from "chai";
import { dot } from "../../src/vector2/dot";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: -1, y: -1 };

describe("vector2/dot", () => {
  it("calculates correctly", () => {
    expect(dot(vector1, vector1)).to.deep.equal(0);
    expect(dot(vector1, vector2)).to.deep.equal(0);
    expect(dot(vector2, vector3)).to.deep.equal(-2);
    expect(dot(vector3, vector2)).to.deep.equal(-2);
  });
});
