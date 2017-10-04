import { describe, it } from "mocha";
import { expect } from "chai";
import { lerp } from "../../src/math/lerp";

describe("math/lerp", () => {
  it("lerps", () => {
    expect(lerp(0, 1, 0)).to.equal(0);
    expect(lerp(0, 1, 0.25)).to.equal(0.25);
    expect(lerp(0, 1, 0.5)).to.equal(0.5);
    expect(lerp(0, 1, 0.75)).to.equal(0.75);
    expect(lerp(0, 1, 1)).to.equal(1);

    expect(lerp(10, 50, 0)).to.equal(10);
    expect(lerp(10, 50, 0.25)).to.equal(20);
    expect(lerp(10, 50, 0.5)).to.equal(30);
    expect(lerp(10, 50, 0.75)).to.equal(40);
    expect(lerp(10, 50, 1)).to.equal(50);
  });
});
