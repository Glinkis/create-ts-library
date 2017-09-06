import { expect } from "chai";
import { addDragInteraction } from "../../src/interactivity/addDragInteraction";
import "../testutils/trackEventListeners";

describe("logic/addDragInteraction", () => {
  it("is a function", () => {
    expect(addDragInteraction).to.be.a("function");
  });

  it("runs the function properly", () => {
    expect(
      addDragInteraction(document.body, {
        onStart: data => null,
        onMove: data => null,
        onEnd: data => null
      })
    );
  });

  // TODO: Check events.
});
