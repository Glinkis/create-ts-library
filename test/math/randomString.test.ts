import { expect } from "chai";
import * as mocha from "mocha";
import { randomString } from "../../src/math/randomString";

describe("math/randomString", () => {
  it("returns a string.", () => {
    expect(randomString(8)).to.be.a("string");
  });

  it("allows for user specified length.", () => {
    expect(randomString(10).length).to.equal(10);
  });

  it("uses a provided dictionary.", () => {
    expect(randomString(4, "ab")).to.match(/[ab]{4}/);
    expect(randomString(4, "Random")).to.match(/[Random]{4}/);
  });

  it("generates a random string.", () => {
    expect(randomString(4)).to.not.equal(randomString(4));
    expect(randomString(16, "ab")).to.not.equal(randomString(16, "ab"));
  });
});
