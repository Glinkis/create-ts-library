/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutQuint(t) {
  const t1 = t - 1;
  return 1 + t1 * t1 * t1 * t1 * t1;
}
