import { expect } from "chai";
import * as mocha from "mocha";
import "phantomjs-polyfill-find";
import { addDragInteraction } from "../../src/interactivity/addDragInteraction";
import {
  trackEventListeners,
  ITmpEventListener
} from "../testutils/trackEventListeners";

trackEventListeners();

describe("logic/addDragInteraction", () => {
  it("runs the function properly", () => {
    expect(
      addDragInteraction(document.body, {
        onStart: () => null,
        onMove: () => null,
        onEnd: () => null
      })
    );
  });

  it("adds the required events", () => {
    const listeners = (document.body as any)
      .eventListeners as ITmpEventListener[];

    const mousedown = listeners.find(listener => listener.type === "mousedown");

    if (mousedown) {
      expect(mousedown.listener).to.be.a("function");
    } else {
      throw ReferenceError("mousedown is undefined.");
    }

    const touchstart = listeners.find(
      listener => listener.type === "touchstart"
    );

    if (touchstart) {
      expect(touchstart.listener).to.be.a("function");
    } else {
      throw ReferenceError("touchstart is undefined.");
    }
  });
});
