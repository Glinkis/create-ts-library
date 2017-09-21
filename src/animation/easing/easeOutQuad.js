/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutQuad(t) {
  return t * (2 - t);
}
