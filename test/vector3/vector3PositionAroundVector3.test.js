import { expect } from "chai";
import { vector3PositionAroundVector3 } from "../../src/vector3/vector3PositionAroundVector3";

describe("vector3/vector3PositionAroundVector3", () => {
  it("is a function", () => {
    expect(vector3PositionAroundVector3).is.a("function");
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0, z: 0 };
    const result = vector3PositionAroundVector3(vector, 1, 0, 0);
    expect(result.x).to.equal(1);
    expect(result.y).to.equal(0);
    expect(result.z).to.equal(0);
  });

  it("produces the correct vector", () => {
    const vector = { x: 1, y: 1, z: 1 };
    const result = vector3PositionAroundVector3(vector, 1, 0, 0);
    expect(result.x).to.equal(2);
    expect(result.y).to.equal(1);
    expect(result.z).to.equal(1);
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0, z: 0 };
    const result = vector3PositionAroundVector3(vector, 1, Math.PI, 0);
    expect(result.x).to.equal(-1);
    expect(result.y).to.equal(0);
    expect(result.z).to.equal(0);
  });

  it("produces the correct vector", () => {
    const vector = { x: 0, y: 0, z: 0 };
    const result = vector3PositionAroundVector3(
      vector,
      1,
      Math.PI / 2,
      Math.PI
    );
    expect(result.x).to.equal(0);
    expect(result.y).to.equal(1);
    expect(result.z).to.equal(0);
  });
});
