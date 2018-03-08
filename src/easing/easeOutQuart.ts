/** @module easing */

/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutQuart(t: number) {
  return 1 - (t - 1) ** 4;
}
