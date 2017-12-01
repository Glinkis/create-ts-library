/**
 * Initial exponential acceleration slowing to stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutExpo(t) {
  return t === 1 ? 1 : -(2 ** (-10 * t)) + 1;
}
