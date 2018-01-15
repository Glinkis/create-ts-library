import { expect } from "chai";
import * as mocha from "mocha";
import { dragInteraction } from "../../src/interactivity/dragInteraction";
import {
  ITmpEventListener,
  trackEventListeners
} from "../testutils/trackEventListeners";

trackEventListeners();

describe("logic/addDragInteraction", () => {
  const listeners = () =>
    (document.body as any).eventListeners as ITmpEventListener[];

  const findListener = (type: string) =>
    listeners() && listeners().find(listener => listener.type === type);

  const interaction = dragInteraction(document.body);

  it("returns an object", () => {
    expect(interaction).to.be.an("object");
  });

  it("does not attach events by default", () => {
    expect(findListener("mousedown")).to.be.undefined;
    expect(findListener("touchstart")).to.be.undefined;
  });

  it("adds events on attach()", () => {
    interaction.attach();

    const mousedown = findListener("mousedown");
    if (!mousedown) {
      throw Error("mousedown is undefined");
    }
    expect(mousedown.listener).to.be.a("function");

    const touchstart = findListener("touchstart");
    if (!touchstart) {
      throw Error("touchstart is undefined");
    }
    expect(touchstart.listener).to.be.a("function");
  });

  it("removes events on detach()", () => {
    interaction.detach();
    expect(findListener("mousedown")).to.be.undefined;
    expect(findListener("touchstart")).to.be.undefined;
  });
});
