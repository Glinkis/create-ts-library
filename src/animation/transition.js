import { linear } from "../animation/easing";

/**
 * @typedef {object} parameters
 * @property {number} framerate - Transition target framerate.
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
 * TODO: Use animationframe instead of timeouts.
 * Changes a value over time.
 * @param {parameters} params
 */
export function transition(params) {
  const {
    framerate = 25,
    delay = 0,
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

  function startTransition() {
    let val = startValue;
    let time0 = new Date().getTime();

    const interval = setInterval(() => {
      const timeDiff = new Date().getTime() - time0;

      // Positive transition.
      if (startValue < endValue) {
        const diff = endValue - startValue;
        val = easing(timeDiff / duration * diff + startValue);
        if (val >= endValue) {
          finishTransition();
        }
      }

      // Negative transition.
      if (startValue > endValue) {
        const diff = startValue - endValue;
        val = easing(timeDiff / duration * -diff + startValue);
        if (val <= endValue) {
          finishTransition();
        }
      }

      object[property] = val + suffix;
    }, 1000 / framerate);

    function finishTransition() {
      clearInterval(interval);
      object[property] = endValue + suffix;
      if (typeof callback === "function") {
        callback();
      }
    }
  }

  if (startValue !== endValue) {
    setTimeout(startTransition, delay);
  }
}
