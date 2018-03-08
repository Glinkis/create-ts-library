import { expect } from "chai";
import * as mocha from "mocha";
import { elementPositionInContainer } from "../../src/dom/elementPositionInContainer";
import { addOffsetElement } from "../testutils/addOffsetElement";
import { resetDocument } from "../testutils/resetDocument";

function buildDom() {
  resetDocument();
  const parent = addOffsetElement(document.body, 50, 100, 0, 0);
  const child1 = addOffsetElement(parent, 5, 10, 10, 10);
  const child2 = addOffsetElement(parent, 5, 10, 10, 10);
  return { parent, child1, child2 };
}

describe("dom/elementPositionInContainer", () => {
  it("gets the position of child1", () => {
    const dom = buildDom();
    const pos = elementPositionInContainer(dom.child1, dom.parent);
    expect(pos.top).to.equal(5);
    expect(pos.left).to.equal(10);
  });

  it("gets the position of child2", () => {
    const dom = buildDom();
    const pos = elementPositionInContainer(dom.child2, dom.parent);
    expect(pos.top).to.equal(15);
    expect(pos.left).to.equal(10);
  });
});
