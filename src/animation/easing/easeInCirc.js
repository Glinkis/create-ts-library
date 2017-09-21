/**
 * Increases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInCirc(t) {
  return -1 * (Math.sqrt(1 - t * t) - 1);
}
