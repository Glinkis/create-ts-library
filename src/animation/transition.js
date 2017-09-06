import { linear } from "../animation/easing";

/**
 * @typedef {object} parameters
 * @property {number} delay - Wait before start. (ms)
 * @property {number} duration - Time of the transition. (ms)
 * @property {object} object - The object for which the value will be changed.
 * @property {string} property - The object property to be changed.
 * @property {string} suffix - The object property value suffix.
 * @property {number} val1 - Start value.
 * @property {number} val2 - End value.
 * @property {function} ease - Easing method.
 * @property {function} callback - - Executes after transition is finished.
 */

/**
 * Changes a value over time.
 *
 * @memberof animation
 *
 * @param {parameters} params
 */
export function transition(params) {
  const {
    duration = 250,
    object,
    property,
    suffix,
    val1,
    val2,
    easing = linear,
    callback
  } = params;

  const startValue = parseInt(val1);
  const endValue = parseInt(val2);

  let animationFrame;
  let startTime;
  let val = startValue;

  function done() {
    window.cancelAnimationFrame(animationFrame);
    object[property] = endValue + suffix;
    if (typeof callback === "function") {
      callback();
    }
  }

  function step(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    const progress = timestamp - startTime;

    // Positive transition.
    if (startValue < endValue) {
      const diff = endValue - startValue;
      val = easing(progress / duration * diff + startValue);
      if (val >= endValue) {
        done();
      }
    }

    // Negative transition.
    if (startValue > endValue) {
      const diff = startValue - endValue;
      val = easing(progress / duration * -diff + startValue);
      if (val <= endValue) {
        done();
      }
    }

    object[property] = val + suffix;
    animationFrame = window.requestAnimationFrame(step);
  }

  if (startValue !== endValue) {
    animationFrame = window.requestAnimationFrame(step);
  }
}
