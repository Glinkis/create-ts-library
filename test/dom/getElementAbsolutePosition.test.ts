import { expect } from "chai";
import * as mocha from "mocha";
import { getElementAbsolutePosition } from "../../src/dom/getElementAbsolutePosition";
import { addOffsetElement } from "../testutils/addOffsetElement";
import { resetDocument } from "../testutils/resetDocument";

function buildDom() {
  resetDocument();
  const element1 = addOffsetElement(document.body, 0, 0, 0, 0);
  const element2 = addOffsetElement(element1, 10, 20, 0, 0);
  const element3 = addOffsetElement(element2, 5, 10, 0, 0);
  return { element1, element2, element3 };
}

describe("dom/getElementAbsolutePosition", () => {
  it("gets the position of element1", () => {
    const dom = buildDom();
    const pos = getElementAbsolutePosition(dom.element1);
    expect(pos.top).to.equal(0);
    expect(pos.left).to.equal(0);
  });

  it("gets the position of element2", () => {
    const dom = buildDom();
    const pos = getElementAbsolutePosition(dom.element2);
    expect(pos.top).to.equal(10);
    expect(pos.left).to.equal(20);
  });

  it("gets the position of element3", () => {
    const dom = buildDom();
    const pos = getElementAbsolutePosition(dom.element3);
    expect(pos.top).to.equal(15);
    expect(pos.left).to.equal(30);
  });
});
