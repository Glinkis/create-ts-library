import { linear } from "../animation/easing";

/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @memberof animation
 *
 * @param {number} startValue - Start value.
 * @param {number} endValue - End value.
 * @param {number} duration - Time of the transition. (ms)
 * @param {function(value: number): void} callback - Executes every step of the transition.
 * @param {function(t: number): number} easing - Easing method.
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

  function increment(progress) {
    const diff = endValue - startValue;
    value = easing(progress / duration * diff + startValue);
    if (value >= endValue) {
      done();
    }
  }

  function decrement(progress) {
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
    (startValue < endValue ? increment : decrement)(progress);

    if (typeof callback === "function") {
      callback(value);
    }
  }

  if (startValue !== endValue) {
    animationFrame = window.requestAnimationFrame(step);
  } else {
    callback(value);
  }
}
