import * as chai from "chai";
import { transition } from "../../src/animation/transition";
import { addOffsetElement } from "../testutils/addOffsetElement";

const { expect } = chai;

describe("dom/transition", () => {
  it("is a function", () => {
    expect(transition).to.be.a("function");
  });

  document.body.innerHTML = "";
  const element = addOffsetElement(document.body, 0, 0, 10, 10);

  it.only("should do a correct positive transition", done => {
    transition({
      delay: 50,
      duration: 250,
      object: element.style,
      property: "top",
      suffix: "px",
      val1: element.style.top,
      val2: 50,
      callback: () => {
        expect(element.style.top).to.equal("50px");
        done();
      }
    });
  });

  it.only("should do a correct negative transition", done => {
    transition({
      delay: 50,
      duration: 250,
      object: element.style,
      property: "top",
      suffix: "px",
      val1: element.style.top,
      val2: -50,
      callback: () => {
        expect(element.style.top).to.equal("-50px");
        done();
      }
    });
  });
});
