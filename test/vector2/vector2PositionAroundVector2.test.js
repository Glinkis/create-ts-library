import { expect } from "chai";
import { vector2PositionAroundVector2 } from "../../src/vector2/vector2PositionAroundVector2";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };

describe("vector2/vector2PositionAroundVector2", () => {
  it("is a function", () => {
    expect(vector2PositionAroundVector2).is.a("function");
  });

  it("produces the correct vector", () => {
    const result = vector2PositionAroundVector2(vector1, 1, 0);
    expect(result.x).to.equal(1);
    expect(result.y).to.equal(0);
  });

  it("produces the correct vector", () => {
    const result = vector2PositionAroundVector2(vector1, 1, Math.PI);
    expect(result.x).to.equal(-1);
    expect(result.y).to.equal(0);
  });

  it("produces the correct vector", () => {
    const result = vector2PositionAroundVector2(vector1, 1, Math.PI / 2);
    expect(result.x).to.equal(0);
    expect(result.y).to.equal(1);
  });

  it("produces the correct vector", () => {
    const result = vector2PositionAroundVector2(vector2, 1, 0);
    expect(result.x).to.equal(2);
    expect(result.y).to.equal(1);
  });
});
