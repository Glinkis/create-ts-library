/**
 * Slight acceleration from zero to full speed.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInSine(t) {
  return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}
