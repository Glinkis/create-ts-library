/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 * 
 * @returns {number}
 */
export function easeInQuart(t) {
  return t * t * t * t;
}
