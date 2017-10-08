import { expect } from "chai";
import { nodeListToArray } from "../../src/array/nodeListToArray";

describe("array/nodeListToArray", () => {
  it("returns an array", () => {
    const nodeList = document.querySelectorAll("*");
    expect(nodeListToArray(nodeList)).to.be.an.instanceof(Array);
  });
});
