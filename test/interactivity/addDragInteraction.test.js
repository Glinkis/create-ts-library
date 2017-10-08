import { expect } from "chai";
import "phantomjs-polyfill-find";
import { addDragInteraction } from "../../src/interactivity/addDragInteraction";
import { trackEventListeners } from "../testutils/trackEventListeners";

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
    /** @type {Array<TmpEventListener>} */
    const listeners = document.body.eventListeners;

    const mousedown = listeners.find(listener => listener.type === "mousedown");
    expect(mousedown.listener).to.be.a("function");

    const touchstart = listeners.find(
      listener => listener.type === "touchstart"
    );
    expect(touchstart.listener).to.be.a("function");
  });
});
