import { expect } from "chai";
import { bezierDerivative, bezierValue } from "../../src/splines/bezier";

describe("splines/bezierValue", () => {
  it("works as linear (2 points)", () => {
    const points = [0, 1];
    expect(bezierValue(points, 0)).to.equal(0);
    expect(bezierValue(points, 0.25)).to.equal(0.25);
    expect(bezierValue(points, 0.5)).to.equal(0.5);
    expect(bezierValue(points, 0.75)).to.equal(0.75);
    expect(bezierValue(points, 1)).to.equal(1);
  });

  it("works as quadratic (3 points)", () => {
    const points = [0, 1, 2];
    expect(bezierValue(points, 0)).to.equal(0);
    expect(bezierValue(points, 0.25)).to.equal(0.5);
    expect(bezierValue(points, 0.5)).to.equal(1);
    expect(bezierValue(points, 0.75)).to.equal(1.5);
    expect(bezierValue(points, 1)).to.equal(2);
  });

  it("works as cubic (4 points)", () => {
    const points = [0, 1, 2, 3];
    expect(bezierValue(points, 0)).to.equal(0);
    expect(bezierValue(points, 0.25)).to.equal(0.75);
    expect(bezierValue(points, 0.5)).to.equal(1.5);
    expect(bezierValue(points, 0.75)).to.equal(2.25);
    expect(bezierValue(points, 1)).to.equal(3);
  });

  it("works as quartic (5 points)", () => {
    const points = [0, 1, 2, 3, 4];
    expect(bezierValue(points, 0)).to.equal(0);
    expect(bezierValue(points, 0.25)).to.equal(1);
    expect(bezierValue(points, 0.5)).to.equal(2);
    expect(bezierValue(points, 0.75)).to.equal(3);
    expect(bezierValue(points, 1)).to.equal(4);
  });

  it("calculates the correct bezierDerivative as linear (2 points)", () => {
    const points = [0, 1];
    expect(bezierDerivative(points, 0)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.25)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.5)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.75)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 1)).to.deep.equal([0, 1]);
  });

  it("calculates the correct bezierDerivative as quadratic (3 points)", () => {
    const points = [0, 1, 2];
    expect(bezierDerivative(points, 0)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.25)).to.deep.equal([0.25, 1.25]);
    expect(bezierDerivative(points, 0.5)).to.deep.equal([0.5, 1.5]);
    expect(bezierDerivative(points, 0.75)).to.deep.equal([0.75, 1.75]);
    expect(bezierDerivative(points, 1)).to.deep.equal([1, 2]);
  });

  it("calculates the correct bezierDerivative as cubic (4 points)", () => {
    const points = [0, 1, 2, 3];
    expect(bezierDerivative(points, 0)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.25)).to.deep.equal([0.5, 1.5]);
    expect(bezierDerivative(points, 0.5)).to.deep.equal([1, 2]);
    expect(bezierDerivative(points, 0.75)).to.deep.equal([1.5, 2.5]);
    expect(bezierDerivative(points, 1)).to.deep.equal([2, 3]);
  });

  it("calculates the correct bezierDerivative as quartic (5 points)", () => {
    const points = [0, 1, 2, 3, 4];
    expect(bezierDerivative(points, 0)).to.deep.equal([0, 1]);
    expect(bezierDerivative(points, 0.25)).to.deep.equal([0.75, 1.75]);
    expect(bezierDerivative(points, 0.5)).to.deep.equal([1.5, 2.5]);
    expect(bezierDerivative(points, 0.75)).to.deep.equal([2.25, 3.25]);
    expect(bezierDerivative(points, 1)).to.deep.equal([3, 4]);
  });
});
