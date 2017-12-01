/**
 * Accelerates exponentially until finish.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInExpo(t) {
  return t === 0 ? 0 : 2 ** (10 * (t - 1));
}
