/** @module animation.easing */

/**
 * Slight deceleration at the end.
 *
 * @param t - [0-1]
 */
export function easeOutSine(t: number) {
  return Math.sin(t * (Math.PI / 2));
}
