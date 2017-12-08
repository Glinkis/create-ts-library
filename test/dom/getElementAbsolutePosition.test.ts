import { expect } from "chai";
import * as mocha from "mocha";
import { getElementAbsolutePosition } from "../../src/dom/getElementAbsolutePosition";
import { addOffsetElement } from "../testutils/addOffsetElement";
import { resetDocument } from "../testutils/resetDocument";

describe("dom/getElementAbsolutePosition", () => {
  resetDocument();
  const element1 = addOffsetElement(document.body, 0, 0, 0, 0);

  it("element1 position", () => {
    const pos = getElementAbsolutePosition(element1);
    expect(pos.top).to.equal(0);
    expect(pos.left).to.equal(0);
  });

  const element2 = addOffsetElement(element1, 10, 20, 0, 0);

  it("element2 position", () => {
    const pos = getElementAbsolutePosition(element2);
    expect(pos.top).to.equal(10);
    expect(pos.left).to.equal(20);
  });

  const element3 = addOffsetElement(element2, 5, 10, 0, 0);

  it("element3 position", () => {
    const pos = getElementAbsolutePosition(element3);
    expect(pos.top).to.equal(15);
    expect(pos.left).to.equal(30);
  });
});
