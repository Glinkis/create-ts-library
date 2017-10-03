import { expect } from "chai";
import { vector2Distance } from "../../src/vector2/vector2Distance";

describe("vector2/vector2Distance", () => {
  it("is a function", () => {
    expect(vector2Distance).is.a("function");
  });

  it("calculates the correct distance", () => {
    expect(vector2Distance({ x: 0, y: 0 }, { x: 0, y: 0 })).to.equal(0);
    expect(vector2Distance({ x: 1, y: 0 }, { x: 0, y: 0 })).to.equal(1);
    expect(vector2Distance({ x: 1, y: 0 }, { x: -1, y: 0 })).to.equal(2);
    expect(vector2Distance({ x: 0, y: 1 }, { x: 0, y: 0 })).to.equal(1);
    expect(vector2Distance({ x: 0, y: 1 }, { x: 0, y: -1 })).to.equal(2);
  });
});
