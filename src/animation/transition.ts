import { linear } from "../animation/easing";

/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @param startValue - Start value.
 * @param endValue - End value.
 * @param duration - Time of the transition. (ms)
 * @param callback - Executes every step of the transition.
 * @param easing - Easing method.
 */
export function transition(
  startValue: number,
  endValue: number,
  duration: number,
  callback: (value: number) => void,
  easing: (t: number) => number = linear
) {
  let animationFrame: number;
  let startTime: number;
  let value = startValue;

  function done() {
    window.cancelAnimationFrame(animationFrame);
    value = endValue;
  }

  function increment(progress: number) {
    const diff = endValue - startValue;
    value = easing(progress / duration * diff + startValue);
    if (value >= endValue) {
      done();
    }
  }

  function decrement(progress: number) {
    const diff = startValue - endValue;
    value = easing(progress / duration * -diff + startValue);
    if (value <= endValue) {
      done();
    }
  }

  function step(timestamp: number) {
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
