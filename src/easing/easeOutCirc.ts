/** @module easing */

/**
 * Start fast, then decreases velocity until stop.
 *
 * @param t - [0-1]
 */
export function easeOutCirc(t: number) {
  return Math.sqrt(1 - (t - 1) ** 2);
}
