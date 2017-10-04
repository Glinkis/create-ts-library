import { describe, it } from "mocha";
import { expect } from "chai";
import { round } from "../../src/math/round";

describe("math/round", () => {
  it("rounds value", () => {
    expect(round(2.3)).to.equal(2);
    expect(round(2.6)).to.equal(3);
  });

  it("works with negative numbers", () => {
    expect(round(-2.3)).to.equal(-2);
    expect(round(-2.6)).to.equal(-3);
  });

  it("rounds 0.5 up", () => {
    expect(round(0)).to.equal(0);
    expect(round(0.2)).to.equal(0);
    expect(round(0.49)).to.equal(0);
    expect(round(0.5)).to.equal(1);
    expect(round(0.51)).to.equal(1);
    expect(round(-0.49)).to.equal(0);
    expect(round(-0.5)).to.equal(0);
    expect(round(-0.51)).to.equal(-1);
  });

  it("allows custom radix", () => {
    expect(round(1, 3)).to.equal(0);
    expect(round(1.49, 3)).to.equal(0);
    expect(round(1.5, 3)).to.equal(3);
    expect(round(1.51, 3)).to.equal(3);
    expect(round(2, 3)).to.equal(3);
    expect(round(4, 3)).to.equal(3);
    expect(round(5, 3)).to.equal(6);
  });

  it("allows fractional radix", () => {
    expect(round(0, 0.5)).to.equal(0);
    expect(round(0.22, 0.5)).to.equal(0);
    expect(round(0.49, 0.5)).to.equal(0.5);
    expect(round(0.5, 0.5)).to.equal(0.5);
    expect(round(0.6, 0.5)).to.equal(0.5);
    expect(round(0.74, 0.5)).to.equal(0.5);
    expect(round(0.75, 0.5)).to.equal(1);
    expect(round(0.76, 0.5)).to.equal(1);
    expect(round(1.2, 0.5)).to.equal(1);
    expect(round(1.3, 0.5)).to.equal(1.5);
  });

  it("allows negative value and radix", () => {
    expect(round(-0.5, -0.5)).to.equal(-0.5);
    expect(round(-0.6, -0.5)).to.equal(-0.5);
    expect(round(-0.74, -0.5)).to.equal(-0.5);
    expect(round(-0.75, -0.5)).to.equal(-1);
    expect(round(-0.76, -0.5)).to.equal(-1);
    expect(round(-1.2, -0.5)).to.equal(-1);
    expect(round(-1.3, -0.5)).to.equal(-1.5);
  });
});
