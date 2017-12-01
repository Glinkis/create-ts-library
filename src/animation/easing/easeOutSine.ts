/**
 * Slight deceleration at the end.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutSine(t) {
  return Math.sin(t * (Math.PI / 2));
}
