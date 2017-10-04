import { describe, it } from "mocha";
import { expect } from "chai";
import { decimalPlaces } from "../../src/math/decimalPlaces";

describe("number/decimalPlaces", () => {
  it("is a function", () => {
    expect(decimalPlaces).is.a("function");
  });

  it("gets the correct number of decimals", () => {
    expect(decimalPlaces(0)).to.equal(0);
    expect(decimalPlaces(0.1)).to.equal(1);
    expect(decimalPlaces(0.01)).to.equal(2);
    expect(decimalPlaces(0.001)).to.equal(3);
  });

  it("works with omitted zero", () => {
    expect(decimalPlaces(0.1)).to.equal(1);
    expect(decimalPlaces(0.01)).to.equal(2);
  });

  it("works with scientific notation", () => {
    expect(decimalPlaces(25e-100)).to.equal(100);
    expect(decimalPlaces(2.5e-99)).to.equal(100);
  });

  it("works with a string number", () => {
    expect(decimalPlaces(".001")).to.equal(3);
    expect(decimalPlaces("0.001")).to.equal(3);
    expect(decimalPlaces("25e-100")).to.equal(100);
    expect(decimalPlaces("2.5e-99")).to.equal(100);
  });
});
