import { expect } from "chai";
import { positionAroundVector2 } from "../../src/vector2/positionAroundVector2";

const vector1 = { x: 0, y: 0 };
const vector2 = { x: 1, y: 1 };
const vector3 = { x: 1, y: 0 };
const vector4 = { x: -1, y: 0 };
const vector5 = { x: 0, y: 1 };

describe("vector2/positionAroundVector2", () => {
  it("is a function", () => {
    expect(positionAroundVector2).is.a("function");
  });

  it("produces the correct vector", () => {
    expect(positionAroundVector2(vector1, 1, 0)).to.deep.equal(vector3);
    expect(positionAroundVector2(vector1, 1, Math.PI)).to.deep.equal(vector4);
    expect(positionAroundVector2(vector1, 1, Math.PI / 2)).to.deep.equal(
      vector5
    );
    expect(positionAroundVector2(vector2, 1, 0)).to.deep.equal({ x: 2, y: 1 });
  });
});
