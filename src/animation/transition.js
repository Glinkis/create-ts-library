import { linear } from "../animation/easing";

/**
 * Changes a value over time.
 *
 * @memberof animation
 *
 * @param {number} startValue - Start value.
 * @param {number} endValue - End value.
 * @param {number} duration - Time of the transition. (ms)
 * @param {function} callback - Executes every step of the transition.
 * @param {function} easing - Easing method.
 */
export function transition(
  startValue,
  endValue,
  duration,
  callback,
  easing = linear
) {
  let animationFrame;
  let startTime;
  let value = startValue;

  function done() {
    window.cancelAnimationFrame(animationFrame);
    value = endValue;
  }

  function step(timestamp) {
    animationFrame = window.requestAnimationFrame(step);

    if (!startTime) {
      startTime = timestamp;
    }

    const progress = timestamp - startTime;

    // Positive transition.
    if (startValue < endValue) {
      const diff = endValue - startValue;
      value = easing(progress / duration * diff + startValue);
      if (value >= endValue) {
        done();
      }
    }

    // Negative transition.
    if (startValue > endValue) {
      const diff = startValue - endValue;
      value = easing(progress / duration * -diff + startValue);
      if (value <= endValue) {
        done();
      }
    }

    if (typeof callback === "function") {
      callback(value);
    }
  }

  if (startValue !== endValue) {
    animationFrame = window.requestAnimationFrame(step);
  }
}
