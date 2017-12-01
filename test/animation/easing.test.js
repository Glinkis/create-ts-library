import { expect } from "chai";
import * as easing from "../../src/animation/easing";

/**
 * Tests easing methods.
 *
 * @param {string} name - Method name
 * @param {number[]} values - Array of approximately correct values at each position.
 */
function test(name, values) {
  describe(`animation/easing/${name}`, () => {
    /** @type {Function} */
    const method = easing[name];
    const delta = 0.00001;

    it("calculates correct values", () => {
      expect(method(0)).to.be.closeTo(values[0], delta);
      expect(method(0.25)).to.be.closeTo(values[1], delta);
      expect(method(0.5)).to.be.closeTo(values[2], delta);
      expect(method(0.75)).to.be.closeTo(values[3], delta);
      expect(method(1.0)).to.be.closeTo(values[4], delta);
    });
  });
}

test("linear", [0, 0.25, 0.5, 0.75, 1]);
test("easeInSine", [0, 0.07612, 0.292893, 0.617317, 1]);
test("easeOutSine", [0, 0.382683, 0.707107, 0.92388, 1]);
test("easeInOutSine", [0, 0.146447, 0.5, 0.853553, 1]);
test("easeInQuad", [0, 0.0625, 0.25, 0.5625, 1]);
test("easeOutQuad", [0, 0.4375, 0.75, 0.9375, 1]);
test("easeInOutQuad", [0, 0.125, 0.5, 0.875, 1]);
test("easeInCubic", [0, 0.015625, 0.125, 0.421875, 1]);
test("easeOutCubic", [0, 0.578125, 0.875, 0.984375, 1]);
test("easeInOutCubic", [0, 0.0625, 0.5, 0.9375, 1]);
test("easeInQuart", [0, 0.003906, 0.0625, 0.316406, 1]);
test("easeOutQuart", [0, 0.683594, 0.9375, 0.996094, 1]);
test("easeInOutQuart", [0, 0.03125, 0.5, 0.96875, 1]);
test("easeInQuint", [0, 0.000977, 0.03125, 0.237305, 1]);
test("easeOutQuint", [0, 0.762695, 0.96875, 0.999023, 1]);
test("easeInOutQuint", [0, 0.015625, 0.5, 0.984375, 1]);
test("easeInExpo", [0, 0.005524, 0.03125, 0.176777, 1]);
test("easeOutExpo", [0, 0.823223, 0.96875, 0.994476, 1]);
test("easeInOutExpo", [0, 0.015625, 0.5, 0.984375, 1]);
test("easeInCirc", [0, 0.031754, 0.133975, 0.338562, 1]);
test("easeOutCirc", [0, 0.661438, 0.866025, 0.968246, 1]);
test("easeInOutCirc", [0, 0.066987, 0.5, 0.933013, 1]);
