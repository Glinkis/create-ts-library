/** @module animation.easing */

/**
 * Accelerates from zero velocity.
 *
 * @param t - [0-1]
 */
export function easeInQuad(t: number) {
  return t * t;
}
