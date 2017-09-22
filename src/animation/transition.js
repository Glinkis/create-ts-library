import { linear } from "../animation/easing";

/**
 * Changes a value over time.
 *
 * @memberof animation
 *
 * @param {number} startValue - Start value.
 * @param {number} endValue - End value.
 * @param {number} duration - Time of the transition. (ms)
 * @param {function(value: number)} callback - Executes every step of the transition.
 * @param {function(t: number)} easing - Easing method.
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

  function positiveStep(progress) {
    const diff = endValue - startValue;
    value = easing(progress / duration * diff + startValue);
    if (value >= endValue) {
      done();
    }
  }

  function negativeStep(progress) {
    const diff = startValue - endValue;
    value = easing(progress / duration * -diff + startValue);
    if (value <= endValue) {
      done();
    }
  }

  function step(timestamp) {
    animationFrame = window.requestAnimationFrame(step);

    if (!startTime) {
      startTime = timestamp;
    }

    const progress = timestamp - startTime;

    if (startValue < endValue) {
      positiveStep(progress);
    }

    if (startValue > endValue) {
      negativeStep(progress);
    }

    if (typeof callback === "function") {
      callback(value);
    }
  }

  if (startValue !== endValue) {
    animationFrame = window.requestAnimationFrame(step);
  }
}
