import { expect } from "chai";
import * as mocha from "mocha";
import { closestNumber } from "../../src/array/closestNumber";

const array = [0, 10, 15, 20, 30];

describe("array/closestNumber", () => {
  it("gets the correct numbers", () => {
    expect(closestNumber(array, 2)).to.equal(0);
    expect(closestNumber(array, 8)).to.equal(10);
    expect(closestNumber(array, 14)).to.equal(15);
    expect(closestNumber(array, 16)).to.equal(15);
    expect(closestNumber(array, 18)).to.equal(20);
    expect(closestNumber(array, 26)).to.equal(30);
  });
});
