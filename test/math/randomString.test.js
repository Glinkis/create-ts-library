import * as chai from "chai";
import { randomString } from "../../src/math/randomString";
const { expect } = chai;

describe("math/randomString", () => {
  it("is a function", () => {
    expect(randomString).is.a("function");
  });

  it("returns a string.", () => {
    expect(randomString(8)).to.be.a("string");
  });

  it("defaults to 8 characters.", () => {
    expect(randomString().length).to.equal(8);
  });

  it("allows for user specified length.", () => {
    expect(randomString(10).length).to.equal(10);
  });

  it("defaults on invalid lengths.", function() {
    expect(randomString(0).length).to.equal(8);
    expect(randomString(-1).length).to.equal(8);
  });

  it("uses default dictionary if an invalid one is provided.", function() {
    expect(randomString(4, null)).to.match(/[a-zA-Z0-9]{4}/);
    expect(randomString(4, "")).to.match(/[a-zA-Z0-9]{4}/);
  });

  it("uses a provided dictionary.", function() {
    expect(randomString(4, "ab")).to.match(/[ab]{4}/);
    expect(randomString(4, "Random")).to.match(/[Random]{4}/);
  });

  it('generates a "random" string.', function() {
    expect(randomString()).to.not.equal(randomString());
    expect(randomString(4)).to.not.equal(randomString(4));
    expect(randomString(16, "ab")).to.not.equal(randomString(16, "ab"));
  });
});
