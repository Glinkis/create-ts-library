/** @module animation.easing */

/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutQuad(t: number) {
  return t * (2 - t);
}
