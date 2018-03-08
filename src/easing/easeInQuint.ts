/** @module easing */

/**
 * Accelerates from zero velocity..
 *
 * @param t - [0-1]
 */
export function easeInQuint(t: number) {
  return t ** 5;
}
