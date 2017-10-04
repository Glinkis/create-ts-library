import { describe, it } from "mocha";
import { expect } from "chai";
import { getClosestNumber } from "../../src/array/getClosestNumber";

const array = [0, 10, 15, 20, 30];

describe("array/getClosestNumber", () => {
  it("is a function", () => {
    expect(getClosestNumber).to.be.a("function");
  });

  it("gets the correct numbers", () => {
    expect(getClosestNumber(array, 2)).to.equal(0);
    expect(getClosestNumber(array, 8)).to.equal(10);
    expect(getClosestNumber(array, 14)).to.equal(15);
    expect(getClosestNumber(array, 16)).to.equal(15);
    expect(getClosestNumber(array, 18)).to.equal(20);
    expect(getClosestNumber(array, 26)).to.equal(30);
  });
});
