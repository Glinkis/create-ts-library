import { describe, it } from "mocha";
import { expect } from "chai";
import { vector2PositionAroundVector2 } from "../../src/vector2/vector2PositionAroundVector2";

describe("vector2/vector2PositionAroundVector2", () => {
  it("is a function", () => {
    expect(vector2PositionAroundVector2).is.a("function");
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0 };
    const result = vector2PositionAroundVector2(vector, 1, 0, 0);
    expect(result.x).to.equal(1);
    expect(result.y).to.equal(0);
  });

  it("produces the correct vector", () => {
    const vector = { x: 1, y: 1 };
    const result = vector2PositionAroundVector2(vector, 1, 0, 0);
    expect(result.x).to.equal(2);
    expect(result.y).to.equal(1);
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0 };
    const result = vector2PositionAroundVector2(vector, 1, Math.PI, 0);
    expect(result.x).to.equal(-1);
    expect(result.y).to.equal(0);
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0 };
    const result = vector2PositionAroundVector2(vector, 1, Math.PI / 2);
    expect(result.x).to.equal(0);
    expect(result.y).to.equal(1);
  });
});
