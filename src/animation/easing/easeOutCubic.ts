/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutCubic(t) {
  const t1 = t - 1;
  return t1 * t1 * t1 + 1;
}
