import * as chai from "chai";
import { getElementAbsolutePosition } from "../../src/dom/getElementAbsolutePosition";

const { expect } = chai;

describe("dom/getElementAbsolutePosition", () => {
  it("is a function", () => {
    expect(getElementAbsolutePosition).to.be.a("function");
  });

  // Make sure there are no extra pixels.
  document.body.style.padding = "0";
  document.body.style.margin = "0";

  const element1 = addOffsetElement(document.body, 0, 0);

  it("element1 position", () => {
    const pos = getElementAbsolutePosition(element1);
    expect(pos.top).to.equal(0);
    expect(pos.left).to.equal(0);
  });

  const element2 = addOffsetElement(element1, 10, 20);

  it("element2 position", () => {
    const pos = getElementAbsolutePosition(element2);
    expect(pos.top).to.equal(10);
    expect(pos.left).to.equal(20);
  });

  const element3 = addOffsetElement(element2, 5, 10);

  it("element3 position", () => {
    const pos = getElementAbsolutePosition(element3);
    expect(pos.top).to.equal(15);
    expect(pos.left).to.equal(30);
  });
});

function addOffsetElement(parent, top, left) {
  const element = document.createElement("div");
  element.style.position = "relative";
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  parent.appendChild(element);
  return element;
}
