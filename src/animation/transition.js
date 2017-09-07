import { linear } from "../animation/easing";

/**
 * Changes a value over time.
 *
 * @memberof animation
 *
 * @param {object} params - Transition parameters.
 * @param {number} params.delay - Wait before start. (ms)
 * @param {number} params.duration - Time of the transition. (ms)
 * @param {object} params.object - The object for which the value will be changed.
 * @param {string} params.property - The object property to be changed.
 * @param {string} params.suffix - The object property value suffix.
 * @param {number} params.val1 - Start value.
 * @param {number} params.val2 - End value.
 * @param {function} params.easing - Easing method.
 * @param {function} params.callback - Executes after transition is finished.
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
