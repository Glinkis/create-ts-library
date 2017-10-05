import { expect } from "chai";
import { vector3PositionAroundVector3 as positionAroundVector3 } from "../../src/vector3/vector3PositionAroundVector3";

const vector1 = { x: 0, y: 0, z: 0 };
const vector2 = { x: 1, y: 1, z: 1 };
const vector3 = { x: 1, y: 0, z: 0 };
const vector4 = { x: 2, y: 1, z: 1 };
const vector5 = { x: -1, y: 0, z: 0 };
const vector6 = { x: 0, y: 1, z: 0 };

describe("vector3/vector3PositionAroundVector3", () => {
  it("is a function", () => {
    expect(positionAroundVector3).is.a("function");
  });

  it("produces the correct vector", () => {
    expect(positionAroundVector3(vector1, 1, 0, 0)).to.deep.equal(vector3);
    expect(positionAroundVector3(vector2, 1, 0, 0)).to.deep.equal(vector4);
    expect(positionAroundVector3(vector1, 1, Math.PI, 0)).to.deep.equal(
      vector5
    );
    expect(
      positionAroundVector3(vector1, 1, Math.PI / 2, Math.PI)
    ).to.deep.equal(vector6);
  });
});
