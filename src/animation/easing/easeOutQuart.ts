/** @module animation.easing */

/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutQuart(t: number) {
  const t1 = t - 1;
  return 1 - t1 * t1 * t1 * t1;
}
