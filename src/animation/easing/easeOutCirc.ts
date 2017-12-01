/**
 * Start fast, then decreases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeOutCirc(t) {
  const t1 = t - 1;
  return Math.sqrt(1 - t1 * t1);
}
