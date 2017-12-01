/**
 * Slight acceleration at beginning and slight deceleration at end.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInOutSine(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}
