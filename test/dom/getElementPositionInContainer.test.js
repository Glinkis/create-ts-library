import * as chai from "chai";
import { getElementPositionInContainer } from "../../src/dom/getElementPositionInContainer";
import { addOffsetElement } from "../testutils/addOffsetElement";

const { expect } = chai;

describe("dom/getElementPositionInContainer", () => {
  it("is a function", () => {
    expect(getElementPositionInContainer).to.be.a("function");
  });

  const parent = addOffsetElement(document.body, 50, 100);
  const child1 = addOffsetElement(parent, 5, 10, 10, 10);
  const child2 = addOffsetElement(parent, 5, 10, 10, 10);

  it("child1 position", () => {
    const pos = getElementPositionInContainer(child1, parent);
    expect(pos.top).to.equal(5);
    expect(pos.left).to.equal(10);
  });

  it("child2 position", () => {
    const pos = getElementPositionInContainer(child2, parent);
    expect(pos.top).to.equal(15);
    expect(pos.left).to.equal(10);
  });
});
