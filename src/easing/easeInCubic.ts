/** @module easing */

/**
 * Accelerates from zero velocity.
 *
 * @param t - [0-1]
 */
export function easeInCubic(t: number) {
  return t ** 3;
}
