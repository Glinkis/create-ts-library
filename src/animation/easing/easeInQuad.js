/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInQuad(t) {
  return t * t;
}
