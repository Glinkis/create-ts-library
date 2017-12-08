import { expect } from "chai";
import * as mocha from "mocha";
import { absoluteDistance } from "../../src/event/absoluteDistance";

const event0 = { pageX: 0, pageY: 0 };
const event1 = { pageX: 1, pageY: 1 };
const event2 = { pageX: 10, pageY: 100 };
const event3 = { pageX: -1, pageY: -1 };

describe("events/absoluteDistance", () => {
  it("works with positive values", () => {
    expect(absoluteDistance(event0, event0)).to.equal(0);
    expect(absoluteDistance(event0, event1)).to.be.closeTo(1.41, 0.01);
  });
  it("works with negative values", () => {
    expect(absoluteDistance(event0, event3)).to.be.closeTo(1.41, 0.01);
  });
});
