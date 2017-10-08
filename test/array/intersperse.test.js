import { expect } from "chai";
import { intersperse } from "../../src/array/intersperse";

const array = ["item-1", "item-2", "item-3"];

describe("array/intersperse", () => {
  it("returns an array", () => {
    expect(intersperse(array, ".")).to.be.an.instanceof(Array);
  });

  it("works with null", () => {
    expect(intersperse(array, null)).to.contain(null);
  });

  it("works with a string", () => {
    expect(intersperse(array, ".")).to.contain(".");
    expect(intersperse(array, "#")).to.contain("#");
  });

  it("works with a number", () => {
    expect(intersperse(array, 0)).to.contain(0);
    expect(intersperse(array, 1)).to.contain(1);
  });

  it("works with an object", () => {
    const obj = { key1: "value1", key2: "value2" };
    expect(intersperse(array, obj)).to.contain(obj);
  });

  it("works with an empty array", () => {
    expect(intersperse([], ".")).to.have.length(0);
  });
});
