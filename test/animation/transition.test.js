import { describe, it } from "mocha";
import { expect } from "chai";
import { transition } from "../../src/animation/transition";
import { addOffsetElement } from "../testutils/addOffsetElement";

describe("dom/transition", () => {
  it("is a function", () => {
    expect(transition).to.be.a("function");
  });

  document.body.innerHTML = "";
  const element = addOffsetElement(document.body, 0, 0, 10, 10);

  it("should do a correct positive transition", done => {
    transition(parseInt(element.style.top), 50, 250, value => {
      element.style.top = `${value}px`;
      if (element.style.top === "50px") {
        expect(element.style.top).to.equal("50px");
        done();
      }
    });
  });

  it("should do a correct negative transition", done => {
    transition(parseInt(element.style.top), -50, 250, value => {
      element.style.top = `${value}px`;
      if (element.style.top === "-50px") {
        expect(element.style.top).to.equal("-50px");
        done();
      }
    });
  });
});
