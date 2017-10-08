import { expect } from "chai";
import { traverse } from "../../src/vector3/traverse";

describe("vector3/scale", () => {
  it("is a function", () => {
    expect(traverse).is.a("function");
  });

  it("traverses a vector with zero size", () => {
    let steps = 0;
    traverse({ x: 0, y: 0, z: 0 }, () => {
      steps += 1;
    });
    expect(steps).to.equal(1);
  });

  it("traverses a vector with an actual size", () => {
    let steps = 0;
    traverse({ x: 1, y: 2, z: 1 }, () => {
      steps += 1;
    });
    expect(steps).to.equal(12);
  });

  it("does the correct amount of steps", () => {
    let steps = 0;
    traverse(
      { x: 1, y: 2, z: 1 },
      () => {
        steps += 1;
      },
      0.1
    );
    expect(steps).to.equal(2420);
  });
});
