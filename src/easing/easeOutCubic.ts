/** @module easing */

/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutCubic(t: number) {
  return (t - 1) ** 3 + 1;
}
